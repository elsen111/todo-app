package com.todobackend.security.principal;

import com.todobackend.entity.UserEntity;
import lombok.Getter;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Getter
public class UserPrincipal implements UserDetails {

    private final UUID id;
    private final String fullName;
    private final String email;
    private final String password_hash;

    public UserPrincipal(UUID id, String fullName, String email, String password_hash) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password_hash = password_hash;
    }

    public static UserPrincipal from(UserEntity user) {
        return new UserPrincipal(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getPasswordHash()
        );
    }

    @Override public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override public @Nullable String getPassword() {
        return password_hash;
    }

    @Override public String getUsername() {
        return email;
    }
}
