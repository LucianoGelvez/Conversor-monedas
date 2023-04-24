package com.example.HotelAlura.repository;

import com.example.HotelAlura.domain.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservaRepository extends JpaRepository<Reserva,Long> {
}
