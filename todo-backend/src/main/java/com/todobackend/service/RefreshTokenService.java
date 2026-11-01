package com.todobackend.service;

import java.util.UUID;

public interface RefreshTokenService {

    String generate();

    void revokeAllUserRefreshTokens(UUID userId);

}