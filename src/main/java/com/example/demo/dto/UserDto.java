package com.example.demo.dto;

public class UserDto {
        private String email;
        private String password;
        private Long userID;
        private String name;

        public UserDto(Long userID, String name) {
            this.userID = userID;
            this.name = name;
        }

        public Long getUserID() {
            return userID;
        }

        public void setUserID(Long userID) {
            this.userID = userID;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        // Getters and setters

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }






    }

