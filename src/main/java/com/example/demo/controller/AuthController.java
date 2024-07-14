package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.example.demo.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        try {
            System.out.println("Received signup request: " + user);
            if (userService.findByPhone(user.getPhone()).isPresent()) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Phone number already registered");
            }
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
            System.out.println("User signed up successfully");
            return ResponseEntity.status(HttpStatus.CREATED).body("User signed up successfully");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error signing up: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error signing up: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        try {
            System.out.println("Received login request: " + loginUser);
            User user = userService.findByPhone(loginUser.getPhone()).orElse(null);
            if (user != null && passwordEncoder.matches(loginUser.getPassword(), user.getPassword())) {
                String token = jwtUtil.generateToken(user.getPhone());
                System.out.println("User logged in successfully");
                Map<String, Object> response = new HashMap<>();
                response.put("token", token);
                response.put("user", user);
                return ResponseEntity.ok(response);
            } else {
                System.out.println("Invalid phone number or password");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid phone number or password");
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error logging in: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error logging in: " + e.getMessage());
        }
    }
}
