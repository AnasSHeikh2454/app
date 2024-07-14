package com.example.demo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users") // Avoid using reserved words like 'user'
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String dp;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "Role is mandatory")
    private String role; // student, staff, cab-driver

    @NotBlank(message = "Phone number is mandatory")
    @Size(min = 10, max = 15, message = "Phone number should be between 10 to 15 characters")
    private String phone;

    @NotBlank(message = "Password is mandatory")
    private String password;

    // Default constructor
    public User() {}

    // Constructor with all fields
    public User(String dp, String name, String role, String phone, String password) {
        this.dp = dp;
        this.name = name;
        this.role = role;
        this.phone = phone;
        this.password = password;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDp() {
        return dp;
    }

    public void setDp(String dp) {
        this.dp = dp;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", dp='" + dp + '\'' +
                ", name='" + name + '\'' +
                ", role='" + role + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
