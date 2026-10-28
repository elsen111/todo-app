package com.todobackend.common.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {

    private boolean success;
    private String message;
    private int status;
    private T data;
    private String path;
    private Instant timestamp;
    private Map<String, String> errors;

    public static <T> ApiResponse<T> success(String message, T data) {
        return ApiResponse.<T>builder()
                .success(true)
                .message(message)
                .status(200)
                .data(data)
                .timestamp(Instant.now())
                .build();
    }

    public static ApiResponse<Void> success(String message) {
        return ApiResponse.<Void>builder()
                .success(true)
                .message(message)
                .timestamp(Instant.now())
                .build();
    }

    public static ApiResponse<Void> error(
            String message,
            int status,
            String path
    ) {
        return ApiResponse.<Void>builder()
                .success(false)
                .message(message)
                .status(status)
                .path(path)
                .timestamp(Instant.now())
                .build();
    }

    public static ApiResponse<Void> validationError(
            String message,
            int status,
            String path,
            Map<String, String> errors
    ) {
        return ApiResponse.<Void>builder()
                .success(false)
                .message(message)
                .status(status)
                .path(path)
                .timestamp(Instant.now())
                .errors(errors)
                .build();
    }
}