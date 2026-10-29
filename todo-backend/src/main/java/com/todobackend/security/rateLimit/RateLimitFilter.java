package com.todobackend.security.rateLimit;

import com.todobackend.common.dto.ApiResponse;
import com.todobackend.config.properties.RateLimitProperties;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Slf4j
@Component
@RequiredArgsConstructor
public class RateLimitFilter extends OncePerRequestFilter {

    private final RateLimitService rateLimitService;
    private final RateLimitProperties properties;
    private final ObjectMapper objectMapper;

    private static final int MAX_AUTH_BODY_BYTES = 10_000;

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        return !properties.isEnabled();
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
            FilterChain chain) throws ServletException, IOException {

        boolean authPost = "POST".equalsIgnoreCase(request.getMethod())
                && RateLimitPolicy.resolve(request.getServletPath()) == RateLimitPolicy.AUTH;

        if (authPost && request.getContentLengthLong() > MAX_AUTH_BODY_BYTES) {
            writeError(request, response, HttpStatus.CONTENT_TOO_LARGE, "Request body too large");
            return;
        }

        HttpServletRequest effective;
        try {
            effective = authPost
                    ? new CachedBodyHttpServletRequest(request, MAX_AUTH_BODY_BYTES)
                    : request;
        } catch (IOException ex) {
            writeError(request, response, HttpStatus.CONTENT_TOO_LARGE, "Request body too large");
            return;
        }

        RateLimitResult result = rateLimitService.checkLimit(effective);
        response.setHeader("X-RateLimit-Remaining", String.valueOf(result.remainingTokens()));

        if (result.allowed()) {
            chain.doFilter(effective, response);
            return;
        }

        response.setHeader("Retry-After", String.valueOf(result.retryAfterSeconds()));
        writeError(effective, response, HttpStatus.TOO_MANY_REQUESTS,
                "Too many requests. Please try again in " + result.retryAfterSeconds() + " seconds.");
    }

    private void writeError(HttpServletRequest request, HttpServletResponse response,
            HttpStatus status, String message) throws IOException {
        response.setStatus(status.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        response.getWriter().write(objectMapper.writeValueAsString(
                ApiResponse.error(message, status.value(), request.getRequestURI())));
    }

}