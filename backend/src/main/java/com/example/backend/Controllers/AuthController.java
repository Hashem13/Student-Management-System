package com.example.backend.Controllers;

import com.example.backend.DTO.LoginRequest;
import com.example.backend.DTO.LoginResponse;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;  // Assuming you have a UserService for authentication

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok(new LoginResponse("Login successful"));
        } else {
            return ResponseEntity.status(401).body(new LoginResponse("Invalid email or password"));
        }
    }
}
