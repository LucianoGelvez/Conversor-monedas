package com.example.HotelAlura.controller;

import com.example.HotelAlura.domain.Huesped;
import com.example.HotelAlura.service.HuespedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/huesped")
public class HuespedController {
    private HuespedService huespedService;

    @Autowired
    public HuespedController(HuespedService huespedService) {
        this.huespedService = huespedService;
    }

    @PostMapping
    public Huesped guardarHuesped(@RequestBody Huesped huesped){
        return huespedService.guardarHuesped(huesped);
    }

    @GetMapping("/{id}")
    public Optional<Huesped> buscarHuesped(@PathVariable Long id){
        return huespedService.buscarHuesped(id);
    }

    @PutMapping
    public Huesped actualizarHuesped(@RequestBody Huesped huesped){
        return huespedService.actualizarHuesped(huesped);
    }

    @DeleteMapping("/{id}")
    public void eliminarHuesped(@PathVariable Long id){
        huespedService.eliminarHuesped(id);
    }

    @GetMapping
    public List<Huesped> buscarTodos(){
        return huespedService.buscarTodos();
    }
}
