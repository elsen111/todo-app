package com.todobackend.dto.request;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Schema(description = "Register credentials")
public record RegisterRequest(

        @Email(message = "Email must be valid")
        @NotBlank(message = "Email is required")
        @Size(min = 11, max = 255, message = "Email length must be between 11 and 255 characters long")
        String email,

        @NotBlank(message = "Full name is required")
        @Size(max = 100, message = "Full name must not exceed 100 characters.")
        String fullName,

        @NotBlank(message = "Password is required")
        @Pattern(
                regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^A-Za-z0-9]).+$",
                message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
        )
        @Size(min = 8, message = "Password must be at least 8 characters long.")
        String password

) {
}
