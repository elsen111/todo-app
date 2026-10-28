package com.todobackend.security.principal;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class CurrentUser {

    public UserPrincipal getPrincipal() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if(
                authentication == null ||
                !authentication.isAuthenticated() ||
                authentication instanceof AnonymousAuthenticationToken
        ) {
            throw  new IllegalStateException(
                    "Authenticated user isn't available"
            );
        }

        return (UserPrincipal) authentication.getPrincipal();

    }

}
