
package com.todobackend.service.impl;

import com.todobackend.config.properties.PasswordResetProperties;
import com.todobackend.dto.request.ForgotPasswordRequest;
import com.todobackend.dto.request.ResetPasswordRequest;
import com.todobackend.dto.request.VerifyResetOtpRequest;
import com.todobackend.dto.response.VerifyResetOtpResponse;
import com.todobackend.entity.PasswordResetOtpEntity;
import com.todobackend.entity.UserEntity;
import com.todobackend.exception.BadRequestException;
import com.todobackend.exception.InvalidOtpException;
import com.todobackend.repository.PasswordResetOtpRepository;
import com.todobackend.repository.UserRepository;
import com.todobackend.security.password.PasswordResetOtpServiceImpl;
import com.todobackend.security.password.PasswordResetTokenServiceImpl;
import com.todobackend.service.EmailService;
import com.todobackend.service.PasswordResetService;
import com.todobackend.service.RefreshTokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PasswordResetServiceImpl implements PasswordResetService {

    private final UserRepository userRepository;
    private final PasswordResetOtpRepository otpRepository;
    private final PasswordResetOtpServiceImpl otpService;
    private final PasswordResetProperties properties;
    private final EmailService emailService;
    private final PasswordResetTokenServiceImpl passwordResetTokenService;

    private final PasswordEncoder passwordEncoder;
    private final RefreshTokenService refreshTokenService;

    @Override
    @Transactional
    public void forgotPassword(ForgotPasswordRequest request) {

        Optional<UserEntity> userOptional =
                userRepository.findByEmailIgnoreCaseAndIsDeletedFalse(request.email());

        if (userOptional.isEmpty()) {
            return;
        }

        UserEntity user = userOptional.get();

        Instant now = Instant.now();

        boolean recentlyRequested =
                otpRepository.existsByUser_IdAndCreatedAtAfter(
                        user.getId(),
                        now.minus(properties.getResendCooldown())
                );

        if (recentlyRequested) {
            return;
        }

        String otp = otpService.generate(properties.getOtpLength());

        otpRepository.invalidatePreviousOtps(
                user.getId(),
                now
        );

        PasswordResetOtpEntity otpEntity =
                PasswordResetOtpEntity.builder()
                        .user(user)
                        .otpHash(otpService.hash(otp))
                        .expiresAt(now.plus(properties.getOtpExpiration()))
                        .attempts(0)
                        .build();

        otpRepository.save(otpEntity);

        emailService.sendPasswordResetOtp(
                user.getEmail(),
                otp
        );
    }

    @Override
    @Transactional(noRollbackFor = InvalidOtpException.class)
    public VerifyResetOtpResponse verifyResetOtp(VerifyResetOtpRequest request) {

        UserEntity user = userRepository
                .findByEmailIgnoreCaseAndIsDeletedFalse(request.email())
                .orElseThrow(() ->
                        new BadRequestException("Invalid or expired OTP")
                );

        Instant now = Instant.now();

        PasswordResetOtpEntity otpEntity = otpRepository
                .findTopByUser_IdAndUsedAtIsNullAndInvalidatedAtIsNullOrderByCreatedAtDesc(
                        user.getId()
                )
                .orElseThrow(() ->
                        new BadRequestException("Invalid or expired OTP")
                );

        if (!otpEntity.getExpiresAt().isAfter(now)) {
            throw new BadRequestException("OTP has expired");
        }

        if (otpEntity.getAttempts() >= properties.getMaxAttempts()) {
            throw new BadRequestException("Maximum OTP attempts exceeded");
        }

        if (otpEntity.getVerifiedAt() != null) {
            throw new BadRequestException("OTP has already been verified");
        }

        if (!otpService.matches(
                request.otp(),
                otpEntity.getOtpHash()
        )) {
            otpEntity.setAttempts(otpEntity.getAttempts() + 1);

            otpRepository.save(otpEntity);

            throw new InvalidOtpException("Invalid OTP");
        }

        otpEntity.setVerifiedAt(now);

        String resetToken = passwordResetTokenService.generate();

        otpEntity.setResetTokenHash(
                passwordResetTokenService.hash(resetToken)
        );

        otpEntity.setResetTokenExpiresAt(
                now.plus(properties.getResetTokenExpiration())
        );

        otpRepository.save(otpEntity);

        return VerifyResetOtpResponse.builder().resetToken(resetToken).build();
    }

    @Override
    @Transactional
    public void resetPassword(ResetPasswordRequest request) {

        if (!request.newPassword().equals(request.confirmPassword())) {
            throw new BadRequestException("Passwords do not match");
        }

        String resetTokenHash = passwordResetTokenService.hash(request.resetToken());

        PasswordResetOtpEntity otpEntity = otpRepository.findByResetTokenHash(resetTokenHash)
                .orElseThrow(() ->
                        new BadRequestException("Invalid or expired reset token")
                );

        Instant now = Instant.now();

        if (otpEntity.getVerifiedAt() == null) {
            throw new BadRequestException("OTP verification is required");
        }

        if (otpEntity.getUsedAt() != null) {
            throw new BadRequestException("Reset token has already been used");
        }

        if (otpEntity.getInvalidatedAt() != null) {
            throw new BadRequestException("Invalid or expired reset token");
        }

        if (otpEntity.getResetTokenExpiresAt() == null ||
                !otpEntity.getResetTokenExpiresAt().isAfter(now)) {
            throw new BadRequestException("Reset token has expired");
        }

        UserEntity user = otpEntity.getUser();

        user.setPasswordHash(passwordEncoder.encode(request.newPassword()));

        userRepository.save(user);

        otpEntity.setUsedAt(now);

        otpEntity.setResetTokenHash(null);
        otpEntity.setResetTokenExpiresAt(null);

        otpRepository.save(otpEntity);

        refreshTokenService.revokeAllUserRefreshTokens(user.getId());
    }
}
