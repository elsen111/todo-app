package com.todobackend.mapper;

import com.todobackend.dto.request.RegisterRequest;
import com.todobackend.dto.response.UserResponse;
import com.todobackend.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target="id", ignore = true)
    @Mapping(target="passwordHash", ignore = true)
    @Mapping(target="isDeleted", ignore = true)
    @Mapping(target="createdAt", ignore = true)
    @Mapping(target="updatedAt", ignore = true)
    UserEntity toEntity(RegisterRequest registerRequest);

    UserResponse toResponse(UserEntity userEntity);

}
