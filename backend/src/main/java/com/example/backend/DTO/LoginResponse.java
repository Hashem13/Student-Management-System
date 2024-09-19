package com.example.backend.DTO;

public class LoginResponse {

    private String message;

    // Constructors
    public LoginResponse() {}

    public LoginResponse(String message) {
        this.message = message;
    }

    // Getters and Setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
