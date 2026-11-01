package com.todobackend.repository;

import com.todobackend.entity.PasswordResetOtpEntity;
import jakarta.persistence.LockModeType;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

public interface PasswordResetOtpRepository extends JpaRepository<PasswordResetOtpEntity, UUID> {

    Optional<PasswordResetOtpEntity> findTopByUser_IdAndUsedAtIsNullAndInvalidatedAtIsNullOrderByCreatedAtDesc(
            UUID userId
    );
    boolean existsByUser_IdAndCreatedAtAfter(
            UUID userId,
            Instant createdAt
    );

    @Modifying
    @Query("""
    UPDATE PasswordResetOtpEntity otp
    SET otp.invalidatedAt = :invalidatedAt
    WHERE otp.user.id = :userId
      AND otp.usedAt IS NULL
      AND otp.invalidatedAt IS NULL
    """)
    void invalidatePreviousOtps(
            @Param("userId") UUID userId,
            @Param("invalidatedAt") Instant invalidatedAt
    );

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("""
        SELECT otp
        FROM PasswordResetOtpEntity otp
        WHERE otp.user.id = :userId
          AND otp.usedAt IS NULL
          AND otp.invalidatedAt IS NULL
        ORDER BY otp.createdAt DESC
        LIMIT 1
    """)
    Optional<PasswordResetOtpEntity> findLatestActiveOtpForUpdate(
            @Param("userId") UUID userId
    );

    Optional<PasswordResetOtpEntity> findByResetTokenHash(String resetTokenHash);

}
