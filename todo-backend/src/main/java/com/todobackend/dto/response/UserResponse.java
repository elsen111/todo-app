package com.todobackend.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.time.LocalDateTime;
import java.util.UUID;

@JsonPropertyOrder(
        {
                "id",
                "fullName",
                "email",
                "createdAt"
        }
)
@JsonInclude(JsonInclude.Include.NON_NULL)
public record UserResponse(
        UUID id,
        String fullName,
        String email,
        LocalDateTime createdAt
) {
}
