package com.todobackend.controller;

import com.todobackend.common.dto.ApiResponse;
import com.todobackend.dto.request.*;
import com.todobackend.dto.response.AuthResponse;
import com.todobackend.dto.response.UserResponse;
import com.todobackend.dto.response.VerifyResetOtpResponse;
import com.todobackend.security.principal.UserPrincipal;
import com.todobackend.service.AuthService;
import com.todobackend.service.PasswordResetService;
import com.todobackend.service.impl.PasswordResetServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Tag(
        name = "Authentication",
        description = "Endpoints for user registration, login, token refresh, logout and current user"
)
@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final PasswordResetService passwordResetService;


    @Operation(
            summary = "Register a new user",
            description = "Creates a new user account and returns authentication tokens."
    )
    @PostMapping("/register")
    public ResponseEntity<ApiResponse<AuthResponse>> register(
            @RequestBody @Valid RegisterRequest request
    ) {

        AuthResponse response = authService.register(request);

        return ResponseEntity.ok(ApiResponse.success("User registered successfully.", response));
    }



    @Operation(
            summary = "Login",
            description = "Authenticates a user and returns access and refresh tokens"
    )
    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> login(
            @RequestBody @Valid LoginRequest request
    ) {

        AuthResponse response = authService.login(request);

        return ResponseEntity.ok(ApiResponse.success("User logged in successfully.", response));
    }



    @Operation(
            summary = "Get the current user",
            description = "Returns the profile information of the currently authenticated user."
    )
    @GetMapping("/me")
    public ResponseEntity<ApiResponse<UserResponse>> me(
            @AuthenticationPrincipal UserPrincipal userPrincipal
    ) {

        UserResponse response = authService.me(userPrincipal);

        return ResponseEntity.ok(ApiResponse.success("Current user information fetched successfully", response));
    }



    @Operation(
            summary = "Refresh authentication tokens",
            description = "Validates the refresh token and issues a new access token and refresh token."
    )
    @PostMapping("/refresh")
    public ResponseEntity<ApiResponse<AuthResponse>> refreshToken(
            @RequestBody @Valid RefreshTokenRequest request
    ) {

        AuthResponse response = authService.refresh(request);

        return ResponseEntity.ok(ApiResponse.success("Token refreshed successfully.", response));
    }



    @Operation(
            summary = "Logout the current user",
            description = "Revokes the current user's refresh token and terminates the session."
    )
    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(
            @RequestBody @Valid RefreshTokenRequest request
    ) {

        authService.logout(request);

        return ResponseEntity.ok(ApiResponse.success("User logged out successfully", null));
    }

    @Operation(
            summary = "Request password reset",
            description = "Sends a password reset OTP to the user's registered email address."
    )
    @PostMapping("/forgot-password")
    public ResponseEntity<ApiResponse<Void>> forgotPassword(
            @RequestBody @Valid ForgotPasswordRequest request
    ) {
        passwordResetService.forgotPassword(request);

        return ResponseEntity.ok(
                ApiResponse.success(
                        "If an account exists with this email, password reset instructions will be sent.",
                        null
                )
        );
    }

    @Operation(
            summary = "Verify password reset OTP",
            description = "Verifies the OTP and issues a short-lived password reset token."
    )
    @PostMapping("/verify-reset-otp")
    public ResponseEntity<ApiResponse<VerifyResetOtpResponse>> verifyResetOtp(
            @RequestBody @Valid VerifyResetOtpRequest request
    ) {
        VerifyResetOtpResponse response =
                passwordResetService.verifyResetOtp(request);

        return ResponseEntity.ok(
                ApiResponse.success("OTP verified successfully", response)
        );
    }

    @Operation(
            summary = "Reset password",
            description = "Resets the user's password using a valid password reset token."
    )
    @PostMapping("/reset-password")
    public ResponseEntity<ApiResponse<Void>> resetPassword(
            @RequestBody @Valid ResetPasswordRequest request
    ) {
        passwordResetService.resetPassword(request);

        return ResponseEntity.ok(
                ApiResponse.success("Password reset successfully", null)
        );
    }

}
