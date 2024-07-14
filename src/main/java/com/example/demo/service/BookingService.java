package com.example.demo.service;

import com.example.demo.model.Booking;
import com.example.demo.model.Trip;
import com.example.demo.respository.BookingRepository;
import com.example.demo.respository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TripRepository tripRepository;

    public Booking bookTrip(Long tripId, Booking bookingDetails, String userPhone) throws Exception {
        System.out.println("Booking trip with ID: " + tripId);

        Optional<Trip> tripOptional = tripRepository.findById(tripId);

        if (tripOptional.isPresent()) {
            Trip trip = tripOptional.get();
            System.out.println("Trip found: " + trip);

            if (trip.getSeatsAvailable() >= bookingDetails.getNumberOfSeats()) {
                trip.setSeatsAvailable(trip.getSeatsAvailable() - bookingDetails.getNumberOfSeats());
                tripRepository.save(trip);
                System.out.println("Seats available, booking trip...");

                bookingDetails.setTrip(trip);
                bookingDetails.setUserPhone(userPhone); // Set user phone from token
                bookingDetails.setOtpVerified(false); // OTP verification not yet done
                Booking savedBooking = bookingRepository.save(bookingDetails);
                System.out.println("Booking saved: " + savedBooking);
                return savedBooking;
            } else {
                throw new Exception("Not enough seats available");
            }
        } else {
            throw new Exception("Trip not found");
        }
    }

    public void verifyOtp(Long bookingId) throws Exception {
        System.out.println("Verifying OTP for booking ID: " + bookingId);

        Optional<Booking> bookingOptional = bookingRepository.findById(bookingId);

        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            booking.setOtpVerified(true);
            bookingRepository.save(booking);
            System.out.println("OTP verified successfully");
        } else {
            throw new Exception("Booking not found");
        }
    }
}
