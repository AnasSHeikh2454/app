package com.example.demo.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    private static final String SECRET_KEY = "329c6de9559e23187c6e121d9c8520987b2a37f1123376811bef282508458aea"; // Use your secret key

    public String extractPhone(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY.getBytes()) // Ensure the secret key is properly encoded
                .build()
                .parseClaimsJws(token.replace("Bearer ", ""))
                .getBody();
        return claims.getSubject(); // assuming the phone number is stored in the subject
    }
}
