package com.todobackend.config.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import java.time.Duration;

@Getter
@Setter
@Validated
@ConfigurationProperties(prefix = "app.password-reset")
public class PasswordResetProperties {

    private Duration otpExpiration = Duration.ofMinutes(5);

    private Duration resendCooldown = Duration.ofSeconds(60);

    private Duration resetTokenExpiration = Duration.ofMinutes(10);

    private int maxAttempts = 5;

    private int otpLength = 6;
}