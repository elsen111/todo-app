
package com.todobackend.security.rateLimit;

import io.github.bucket4j.Bucket;
import io.github.bucket4j.ConsumptionProbe;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import tools.jackson.core.JacksonException;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.TimeUnit;

@Slf4j
@Service
@RequiredArgsConstructor
public class RateLimitService {

    private static final String EMAIL_FIELD = "email";

    private final RateLimitBucketRegistry bucketRegistry;
    private final ObjectMapper objectMapper;

    public RateLimitResult checkLimit(HttpServletRequest request) {
        RateLimitPolicy policy = RateLimitPolicy.resolve(request.getServletPath());

        // Always limit per IP.
        RateLimitResult result = consume(
                policy,
                "ip:" + request.getRemoteAddr()
        );

        if (!result.allowed() || policy != RateLimitPolicy.AUTH) {
            return result;
        }

        // For auth routes, also limit per email.
        String email = extractEmail(request);

        return StringUtils.hasText(email)
                ? consume(policy, "email:" + email.trim().toLowerCase(Locale.ROOT))
                : result;
    }

    private RateLimitResult consume(RateLimitPolicy policy, String identity) {
        Bucket bucket = bucketRegistry.resolveBucket(
                policy.name() + ":" + identity,
                policy
        );

        ConsumptionProbe probe = bucket.tryConsumeAndReturnRemaining(1);

        long retryAfter = probe.isConsumed()
                ? 0
                : TimeUnit.NANOSECONDS.toSeconds(
                probe.getNanosToWaitForRefill()
        ) + 1;

        if (!probe.isConsumed()) {
            log.warn(
                    "Rate limit exceeded: policy={}, retryAfter={}s",
                    policy,
                    retryAfter
            );
        }

        return new RateLimitResult(
                probe.isConsumed(),
                probe.getRemainingTokens(),
                retryAfter
        );
    }

    private String extractEmail(HttpServletRequest request) {
        if (!"POST".equalsIgnoreCase(request.getMethod())) {
            return null;
        }

        String contentType = request.getContentType();

        if (contentType == null ||
                !contentType.toLowerCase(Locale.ROOT)
                        .contains(MediaType.APPLICATION_JSON_VALUE)) {
            return null;
        }

        try {
            Map<String, Object> body = objectMapper.readValue(
                    request.getInputStream(),
                    new TypeReference<Map<String, Object>>() {}
            );

            if (body == null) {
                return null;
            }

            Object email = body.get(EMAIL_FIELD);

            return email instanceof String value ? value : null;

        } catch (JacksonException | IOException ex) {
            log.atDebug()
                    .setMessage("Unable to extract rate-limit identity from request body.")
                    .addKeyValue("method", request.getMethod())
                    .addKeyValue("path", request.getServletPath())
                    .log();

            return null;
        }
    }
}
