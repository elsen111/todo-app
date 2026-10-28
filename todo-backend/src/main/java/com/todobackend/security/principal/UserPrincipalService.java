package com.todobackend.security.principal;

import com.todobackend.entity.UserEntity;
import com.todobackend.exception.NotFoundException;
import com.todobackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.jspecify.annotations.NullMarked;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserPrincipalService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    @NullMarked
    public UserDetails loadUserByUsername(
            String email
    ) throws UsernameNotFoundException {

        UserEntity authenticatedUser = userRepository.findByEmailIgnoreCaseAndIsDeletedFalse(email)
                .orElseThrow(
                        () -> new NotFoundException("User not found with this email")
                );

        return UserPrincipal.from(authenticatedUser);

    }
}
