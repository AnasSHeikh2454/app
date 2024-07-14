package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.respository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(User newUser) {
        if (userRepository.findByPhone(newUser.getPhone()).isPresent()) {
            throw new IllegalStateException("Email already in use.");
        }
        return userRepository.save(newUser);
    }
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findByPhone(String phone) {
        return userRepository.findByPhone(phone);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
