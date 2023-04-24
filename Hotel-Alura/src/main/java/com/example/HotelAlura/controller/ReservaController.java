package com.example.HotelAlura.controller;

import com.example.HotelAlura.domain.Reserva;
import com.example.HotelAlura.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reserva")
public class ReservaController {
    private ReservaService reservaService;

    @Autowired
    public ReservaController(ReservaService reservaService) {
        this.reservaService = reservaService;
    }

    @PostMapping
    public Reserva guardarReserva(@RequestBody Reserva reserva){
        return reservaService.guardarReserva(reserva);
    }

    @GetMapping("/{id}")
    public Optional<Reserva> buscarReserva(@PathVariable Long id){
        return reservaService.buscarReserva(id);
    }

    @PutMapping
    public Reserva actualizarReservad(@RequestBody Reserva reserva){
        return reservaService.actualizarReserva(reserva);
    }

    @DeleteMapping("/{id}")
    public void eliminarReserva(@PathVariable Long id){
        reservaService.eliminarReserva(id);
    }

    @GetMapping
    public List<Reserva> buscarTodos(){
        return reservaService.buscarTodos();
    }
}
