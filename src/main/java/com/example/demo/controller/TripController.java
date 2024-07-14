package com.example.demo.controller;

import com.example.demo.model.Trip;
import com.example.demo.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/trips")
public class TripController {
    @Autowired
    private TripService tripService;

    @PostMapping("/post")
    public Trip postTrip(@RequestBody Trip trip) {
        return tripService.saveTrip(trip);
    }

    @GetMapping("/search")
    public List<Trip> searchTrips(@RequestParam String destination,
                                  @RequestParam String start,
                                  @RequestParam String end) {
        LocalDateTime startTime = LocalDateTime.parse(start);
        LocalDateTime endTime = LocalDateTime.parse(end);
        return tripService.searchTrips(destination, startTime, endTime);
    }

    @GetMapping("/all")
    public List<Trip> getAllTrips() {
        return tripService.getAllTrips();
    }
}
