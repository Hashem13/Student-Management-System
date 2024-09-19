package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class UserService {

        @Autowired
        private UserRepository userRepository;

        public List<User> getAllUsers() {
            return userRepository.findAll();
        }

        public User getUserById(Long id) {
            return userRepository.findById(id).orElse(null);
        }

        public User saveUser(User user) {
            return userRepository.save(user);
        }

        public void deleteUser(Long id) {
            userRepository.deleteById(id);
        }

        public boolean authenticateUser(String email, String password) {
            User user = userRepository.findByEmail(email);

            // Here you would validate the password, probably using a hash comparison.
            if (user != null && user.getPassword().equals(password)) {
                return true;
            }
            return false;
        }
    }

