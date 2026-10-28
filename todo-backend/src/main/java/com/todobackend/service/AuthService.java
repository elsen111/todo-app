package com.todobackend.service;

import com.todobackend.dto.request.LoginRequest;
import com.todobackend.dto.request.RefreshTokenRequest;
import com.todobackend.dto.request.RegisterRequest;
import com.todobackend.dto.response.AuthResponse;
import com.todobackend.dto.response.UserResponse;
import com.todobackend.security.principal.UserPrincipal;

public interface AuthService {

    AuthResponse register(RegisterRequest registerRequest);

    AuthResponse login(LoginRequest loginRequest);

    UserResponse me(UserPrincipal userPrincipal);

    AuthResponse refresh(RefreshTokenRequest refreshTokenRequest);

    void logout(RefreshTokenRequest refreshTokenRequest);

}
