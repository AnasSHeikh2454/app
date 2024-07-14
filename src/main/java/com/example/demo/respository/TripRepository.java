package com.example.demo.respository;

import com.example.demo.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TripRepository extends JpaRepository<Trip, Long> {
    List<Trip> findByDestinationAndDepartureTimeBetween(String destination, LocalDateTime start, LocalDateTime end);
}
