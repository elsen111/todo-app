package com.todobackend.service;

public interface EmailService {

    void sendPasswordResetOtp(String recipient, String otp);

}
