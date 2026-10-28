package com.todobackend.controller;

import com.todobackend.common.dto.ApiResponse;
import com.todobackend.dto.request.LoginRequest;
import com.todobackend.dto.request.RefreshTokenRequest;
import com.todobackend.dto.request.RegisterRequest;
import com.todobackend.dto.response.AuthResponse;
import com.todobackend.dto.response.UserResponse;
import com.todobackend.security.principal.UserPrincipal;
import com.todobackend.service.AuthService;
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

}
