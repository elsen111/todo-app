package com.todobackend.security.jwt;

import com.todobackend.security.principal.UserPrincipal;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    private final JwtProperties jwtProperties;
    private final SecretKey secretKey;

    public JwtService(JwtProperties jwtProperties, SecretKey secretKey) {
        this.jwtProperties = jwtProperties;
        this.secretKey = secretKey;
    }

    public String generateAccessToken(UserPrincipal principal){

        Date issuedAt = new Date();
        Date expiration = new Date(
                issuedAt.getTime() + jwtProperties.accessTokenExpiration()
        );

        return Jwts.builder()
                .subject(principal.getEmail())
                .claim("userId", principal.getId().toString())
                .claim("userFullName", principal.getFullName())
                .issuedAt(issuedAt)
                .expiration(expiration)
                .signWith(secretKey)
                .compact();

    }

    public String extractUserName(String token) {
        return extractClaims(token).getSubject();
    }

    public boolean isTokenValid(String token, UserPrincipal principal) {

        try {
            String username = extractUserName(token);

            return username.equalsIgnoreCase(principal.getEmail())
                    && !isTokenExpired(token);
        } catch (JwtException | IllegalArgumentException exception) {
            return false;
        }
    }

    public long getAccessTokenExpiration() {
        return jwtProperties.accessTokenExpiration();
    }

    boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }

    private Claims extractClaims(String token) {
        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

}
