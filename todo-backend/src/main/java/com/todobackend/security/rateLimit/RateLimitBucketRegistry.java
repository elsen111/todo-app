package com.todobackend.security.rateLimit;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.todobackend.config.properties.RateLimitProperties;
import io.github.bucket4j.Bandwidth;
import io.github.bucket4j.Bucket;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.Duration;

@Component
@RequiredArgsConstructor
public class RateLimitBucketRegistry {

    private final RateLimitProperties properties;

    private final Cache<String, Bucket> buckets = Caffeine.newBuilder()
            .expireAfterAccess(Duration.ofMinutes(10))
            .maximumSize(100_000)
            .build();

    public Bucket resolveBucket(String key, RateLimitPolicy policy) {
        return buckets.get(key, k -> newBucket(policy));
    }

    private Bucket newBucket(RateLimitPolicy policy) {
        RateLimitProperties.Limit limit = policy == RateLimitPolicy.AUTH
                ? properties.getAuth()
                : properties.getGeneral();

        Bandwidth bandwidth = Bandwidth.builder()
                .capacity(limit.getCapacity())
                .refillGreedy(
                        limit.getCapacity(),
                        Duration.ofMinutes(limit.getRefillDurationMinutes())
                )
                .build();

        return Bucket.builder()
                .addLimit(bandwidth)
                .build();
    }
}