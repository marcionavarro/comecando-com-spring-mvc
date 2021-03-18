package com.marcionavarro.cobranca.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcionavarro.cobranca.model.Titulo;

public interface Titulos extends JpaRepository<Titulo, Long> {

}
