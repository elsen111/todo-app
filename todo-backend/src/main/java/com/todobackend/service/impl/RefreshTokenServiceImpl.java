package com.todobackend.service.impl;

import com.todobackend.entity.RefreshTokenEntity;
import com.todobackend.repository.RefreshTokenRepository;
import com.todobackend.service.RefreshTokenService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

@Component
@Service
@RequiredArgsConstructor
public class RefreshTokenServiceImpl implements RefreshTokenService {

    private final SecureRandom secureRandom = new SecureRandom();

    private final RefreshTokenRepository refreshTokenRepository;

    @Override
    public String generate() {

        byte[] bytes = new byte[64];

        secureRandom.nextBytes(bytes);

        return Base64.getUrlEncoder()
                .withoutPadding()
                .encodeToString(bytes);
    }

    @Override
    @Transactional
    public void revokeAllUserRefreshTokens(UUID userId) {

        List<RefreshTokenEntity> refreshTokens = refreshTokenRepository.findAllByUser_Id(userId);

        refreshTokens.forEach(RefreshTokenEntity::revoke);

        refreshTokenRepository.saveAll(refreshTokens);
    }
}