package com.todobackend.security.password;

public interface PasswordResetOtpService {

    String generate(int length);
    String hash(String otp);
    boolean matches(String otp, String storedHash);

}
