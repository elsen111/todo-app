package com.todobackend.service.impl;

import com.todobackend.config.properties.PasswordResetProperties;
import com.todobackend.service.EmailService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;
    private final PasswordResetProperties properties;

    @Value("${spring.mail.username}")
    private String senderEmail;

    @Override
    public void sendPasswordResetOtp(String recipient, String otp) {

        Context context = new Context();

        context.setVariable("otp", otp);
        context.setVariable(
                "expirationMinutes",
                properties.getOtpExpiration().toMinutes()
        );

        String htmlContent = templateEngine.process(
                "email/password-reset-otp",
                context
        );

        var message = mailSender.createMimeMessage();

        try {
            MimeMessageHelper helper = new MimeMessageHelper(
                    message,
                    MimeMessageHelper.MULTIPART_MODE_MIXED,
                    StandardCharsets.UTF_8.name()
            );

            helper.setFrom(senderEmail);
            helper.setTo(recipient);
            helper.setSubject("Reset your password");

            helper.setText(
                    "Your password reset code is: " + otp
                            + ". It expires in "
                            + properties.getOtpExpiration().toMinutes()
                            + " minutes.",
                    htmlContent
            );

            mailSender.send(message);

        } catch (MessagingException exception) {
            throw new IllegalStateException(
                    "Failed to send password reset email",
                    exception
            );
        }
    }
}