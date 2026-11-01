package com.todobackend.service;

import com.todobackend.dto.request.ForgotPasswordRequest;
import com.todobackend.dto.request.ResetPasswordRequest;
import com.todobackend.dto.request.VerifyResetOtpRequest;
import com.todobackend.dto.response.VerifyResetOtpResponse;

public interface PasswordResetService {

    void forgotPassword(ForgotPasswordRequest request);

    VerifyResetOtpResponse verifyResetOtp(VerifyResetOtpRequest request);

    void resetPassword(ResetPasswordRequest request);
}
