package com.example.api.controller;

import com.example.api.dto.CommentDto;
import com.example.api.dto.IdeaDto;
import com.example.api.model.Comment;
import com.example.api.model.Idea;
import com.example.api.repository.CommentRepository;
import com.example.api.repository.IdeaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class IdeaController {
    @Autowired
    IdeaRepository ideaRepository;

    @Autowired
    CommentRepository commentRepository;

    @GetMapping("ideas")
    public List<IdeaDto.SimpleIdea> ideas() {
        System.out.print("front/ideas");
        return this.ideaRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt")).stream().map(idea->new IdeaDto.SimpleIdea(idea)).collect(Collectors.toList());
    }

    @PostMapping("ideas")
    public IdeaDto.CreatedIdea create(@RequestBody IdeaDto.IdeaCreateRequest data) {
        var idea = this.ideaRepository.save(new Idea(data.title, data.description, data.deadline));
        return new IdeaDto.CreatedIdea(idea);

    }

    @GetMapping("ideas/{id}")
    public IdeaDto.IdeaDetail idea(@PathVariable("id") int id) {
        var idea = this.ideaRepository.findById(id).orElseThrow(NoSuchElementException::new);
        return new IdeaDto.IdeaDetail(idea);
    }

    @PostMapping("ideas/{id}/comment")
    @Transactional
    public CommentDto.CreatedComment comment(@PathVariable("id") int id, @RequestBody CommentDto.CreateRequest data) {
        var idea = this.ideaRepository.findById(id).orElseThrow(NoSuchElementException::new);
        var comment = this.commentRepository.saveAndFlush(new Comment(data.comment, idea));
        return new CommentDto.CreatedComment(comment);
    }
}
