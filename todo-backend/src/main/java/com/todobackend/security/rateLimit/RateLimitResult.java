package com.todobackend.security.rateLimit;

public record RateLimitResult(
        boolean allowed,
        long remainingTokens,
        long retryAfterSeconds
) {
}