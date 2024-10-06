package com.example.backend.Controllers;

import com.example.backend.model.AuthRequest;
import com.example.backend.model.UserInfo;
import com.example.backend.service.JwtService;
import com.example.backend.service.UserInfoDetails;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome, this endpoint is not secure";
    }

    @PostMapping("/addNewUser")
    public String addNewUser(@RequestBody UserInfo userInfo) {
        return service.addUser(userInfo);
    }

    @GetMapping("/user/userProfile")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public String userProfile() {
        return "Welcome to User Profile";
    }

    @GetMapping("/admin/adminProfile")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public String adminProfile() {
        return "Welcome to Admin Profile";
    }

    @PostMapping("/generateToken")
    public ResponseEntity<String> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
        );
        if (authentication.isAuthenticated()) {
            // Load user details from UserService
            UserInfoDetails userDetails = (UserInfoDetails) service.loadUserByUsername(authRequest.getUsername());

            // Get the UserInfo object
            UserInfo userInfo = userDetails.getUserInfo();

            // Prepare additional claims
            Map<String, Object> claims = new HashMap<>();
            claims.put("firstName", userInfo.getFirstName());
            claims.put("lastName", userInfo.getLastName());
            claims.put("email", userInfo.getEmail());
            claims.put("id", userInfo.getId());
            claims.put("role", userInfo.getRoles()); // Assuming roles are stored in the UserInfo model

            // Create JWT token including additional claims
            String token = jwtService.generateToken(userDetails.getUsername(), claims);

            return ResponseEntity.ok(token);
        } else {
            throw new UsernameNotFoundException("Invalid user request!");
        }
    }



}
