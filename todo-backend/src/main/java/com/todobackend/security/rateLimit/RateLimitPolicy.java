package com.todobackend.security.rateLimit;

import org.springframework.util.AntPathMatcher;

import java.util.List;

public enum RateLimitPolicy {

    AUTH(List.of(
            "/api/v1/auth/login",
            "/api/v1/auth/register",
            "/api/v1/auth/register/**",
            "/api/v1/auth/refresh",
            "/api/v1/auth/forgot-password",
            "/api/v1/auth/reset-password"
    )),

    GENERAL(List.of("/**"));

    private final List<String> pathPatterns;

    RateLimitPolicy(List<String> pathPatterns) {
        this.pathPatterns = pathPatterns;
    }

    public List<String> getPathPatterns() {
        return pathPatterns;
    }

    private static final AntPathMatcher PATH_MATCHER = new AntPathMatcher();

    public static RateLimitPolicy resolve(String servletPath) {
        for (RateLimitPolicy policy : values()) {
            if (policy == GENERAL) {
                continue;
            }
            for (String pattern : policy.getPathPatterns()) {
                if (PATH_MATCHER.match(pattern, servletPath)) {
                    return policy;
                }
            }
        }
        return GENERAL;
    }
}