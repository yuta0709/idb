package com.example.api.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Comment {

    public Comment(){}

    public Comment(String comment, Idea idea){
        this.comment = comment;
        this.idea = idea;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    public Integer getId() {
        return id;
    }

    private String comment;

    public String getComment() {
        return comment;
    }

    @ManyToOne
    private Idea idea;

    public Idea getIdea() {
        return idea;
    }

    @CreationTimestamp
    private LocalDateTime createdAt;

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
