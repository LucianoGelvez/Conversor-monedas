package com.example.HotelAlura;

import com.example.HotelAlura.domain.Usuario;
import com.example.HotelAlura.domain.UsuarioRol;
import com.example.HotelAlura.repository.HuespedRepository;
import com.example.HotelAlura.repository.ReservaRepository;
import com.example.HotelAlura.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HotelAluraApplication {
	public static void main(String[] args) {
		SpringApplication.run(HotelAluraApplication.class, args);

	}
}
