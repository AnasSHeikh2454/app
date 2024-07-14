package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.respository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String phone) throws UsernameNotFoundException {
        Optional<User> userOptional = userRepository.findByPhone(phone);
        if (userOptional.isEmpty()) {
            throw new UsernameNotFoundException("User not found with phone: " + phone);
        }
        User user = userOptional.get();
        return new org.springframework.security.core.userdetails.User(user.getPhone(), user.getPassword(), new ArrayList<>());
    }
}
