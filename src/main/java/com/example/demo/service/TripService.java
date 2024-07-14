package com.example.demo.service;

import com.example.demo.model.Trip;
import com.example.demo.respository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TripService {
    @Autowired
    private TripRepository tripRepository;

    public Trip saveTrip(Trip trip) {
        return tripRepository.save(trip);
    }

    public List<Trip> searchTrips(String destination, LocalDateTime start, LocalDateTime end) {
        return tripRepository.findByDestinationAndDepartureTimeBetween(destination, start, end);
    }

    public List<Trip> getAllTrips() {
        return tripRepository.findAll();
    }
}
