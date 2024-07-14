// src/main/java/com/example/demo/repository/BookingRepository.java
package com.example.demo.respository;

import com.example.demo.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
