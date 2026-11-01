package com.todobackend.security.password;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.HexFormat;

@Service
public class PasswordResetOtpServiceImpl implements PasswordResetOtpService {

    private static final String HMAC_ALGORITHM = "HmacSHA256";

    private final SecureRandom secureRandom = new SecureRandom();

    @Value("${app.password-reset.otp-secret}")
    private String otpSecret;

    @Override
    public String generate(int length) {
        int bound = (int) Math.pow(10, length);

        int code = secureRandom.nextInt(bound);

        return String.format("%0" + length + "d", code);
    }

    @Override
    public String hash(String otp) {
        try {
            Mac mac = Mac.getInstance(HMAC_ALGORITHM);

            SecretKeySpec key = new SecretKeySpec(
                    otpSecret.getBytes(StandardCharsets.UTF_8),
                    HMAC_ALGORITHM
            );

            mac.init(key);

            byte[] hash = mac.doFinal(
                    otp.getBytes(StandardCharsets.UTF_8)
            );

            return HexFormat.of().formatHex(hash);

        } catch (Exception exception) {
            throw new IllegalStateException(
                    "Could not hash password reset OTP",
                    exception
            );
        }
    }

    @Override
    public boolean matches(String otp, String storedHash) {
        byte[] submittedHash = hash(otp)
                .getBytes(StandardCharsets.UTF_8);

        byte[] expectedHash = storedHash
                .getBytes(StandardCharsets.UTF_8);

        return MessageDigest.isEqual(submittedHash, expectedHash);
    }
}