package com.todobackend.dto.response;

import lombok.Builder;

@Builder
public record VerifyResetOtpResponse(
        String resetToken
) {
}
