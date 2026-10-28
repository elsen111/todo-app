package com.todobackend.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Schema(description = "Login credentials")
public record LoginRequest(
//        @Schema(example = "user@example.com")
        @NotBlank(message = "Email is required")
        @Email(message = "Email must be valid")
        String email,

//        @Schema(example = "P@ssw0rd123")
        @NotBlank(message = "Password is required")
        String password
) {}