package com.example.HotelAlura.service;

import com.example.HotelAlura.domain.Huesped;
import com.example.HotelAlura.domain.Reserva;
import com.example.HotelAlura.repository.HuespedRepository;
import com.example.HotelAlura.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {
    private ReservaRepository reservaRepository;

    @Autowired
    public ReservaService(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    public Reserva guardarReserva(Reserva reserva){
        return reservaRepository.save(reserva);
    }

    public Reserva actualizarReserva(Reserva reserva){
        return reservaRepository.save(reserva);
    }

    public Optional<Reserva> buscarReserva(Long id){
        return reservaRepository.findById(id);
    }

    public void eliminarReserva(Long id){
        reservaRepository.deleteById(id);
    }

    public List<Reserva> buscarTodos(){
        return reservaRepository.findAll();
    }
}
