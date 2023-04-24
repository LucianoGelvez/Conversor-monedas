package com.example.HotelAlura.service;

import com.example.HotelAlura.domain.Huesped;
import com.example.HotelAlura.repository.HuespedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HuespedService {
    private HuespedRepository huespedRepository;

    @Autowired
    public HuespedService(HuespedRepository huespedRepository) {
        this.huespedRepository = huespedRepository;
    }

    public Huesped guardarHuesped(Huesped huesped){
        return huespedRepository.save(huesped);
    }

    public Huesped actualizarHuesped(Huesped huesped){
        return huespedRepository.save(huesped);
    }

    public Optional<Huesped> buscarHuesped(Long id){
        return huespedRepository.findById(id);
    }

    public void eliminarHuesped(Long id){
        huespedRepository.deleteById(id);
    }

    public List<Huesped> buscarTodos(){
        return huespedRepository.findAll();
    }
}
