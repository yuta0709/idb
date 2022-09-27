package com.example.api.model;


import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Idea {

    public Idea() {}

    public Idea(String title, String description, String deadline){
        this.title = title;
        this.description = description;
        this.deadline = deadline;
    };
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;



    public Integer getId() {
        return id;
    }


    private String title;

    public String getTitle() {
        return title;
    }


    private String description;

    public String getDescription() {
        return description;
    }

    private String deadline;

    public String getDeadline() {
        return deadline;
    }

    @CreationTimestamp
    private LocalDateTime createdAt;

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    @OneToMany(mappedBy = "idea", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    public List<Comment> getComments() {
        return comments;
    }
}
