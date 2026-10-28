package com.todobackend.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Builder;

@JsonPropertyOrder(
        {
                "tokenType",
                "accessToken",
                "refreshToken",
                "expiresInSeconds"
        }
)
@JsonInclude(JsonInclude.Include.NON_NULL)
public record AuthResponse (
    String tokenType,
    String accessToken,
    String refreshToken,
    Long expiresInSeconds,
    UserResponse user
){
}