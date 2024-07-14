package com.example.demo.controller;

import com.example.demo.model.Booking;
import com.example.demo.service.BookingService;
import com.example.demo.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/book/{tripId}")
    public Booking bookTrip(@PathVariable Long tripId, @RequestBody Booking bookingDetails, @RequestHeader("Authorization") String token) {
        try {
            // Extract the token without the Bearer prefix
            if (token.startsWith("Bearer ")) {
                token = token.substring(7);
            }
            String userPhone = jwtService.extractPhone(token); // Method to extract user phone from JWT
            System.out.println("Received booking request for trip ID: " + tripId + " by user: " + userPhone);
            Booking booking = bookingService.bookTrip(tripId, bookingDetails, userPhone);
            System.out.println("Booking successful: " + booking);
            return booking;
        } catch (Exception e) {
            System.err.println("Error booking trip: " + e.getMessage());
            throw new RuntimeException("Booking failed: " + e.getMessage());
        }
    }

    @PostMapping("/verify-otp/{bookingId}")
    public String verifyOtp(@PathVariable Long bookingId) {
        try {
            System.out.println("Received OTP verification request for booking ID: " + bookingId);
            bookingService.verifyOtp(bookingId);
            System.out.println("OTP verification successful");
            return "OTP verified successfully";
        } catch (Exception e) {
            System.err.println("Error verifying OTP: " + e.getMessage());
            throw new RuntimeException("OTP verification failed: " + e.getMessage());
        }
    }
}
