package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository; // Injecting the UserRepository

    public boolean isValidCredentials(String username, String password) {
        // Retrieve the user by username from the database
        User user = userRepository.findByUsername(username);
        
        // Check if the user exists and if the password matches
        return user != null && user.getPassword().equals(password);
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
