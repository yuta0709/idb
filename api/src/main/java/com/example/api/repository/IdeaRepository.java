package com.example.api.repository;

import com.example.api.model.Idea;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IdeaRepository extends JpaRepository<Idea, Integer> {
}
