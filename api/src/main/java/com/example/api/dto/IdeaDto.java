package com.example.api.dto;


import com.example.api.model.Comment;
import com.example.api.model.Idea;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class IdeaDto {

    public static class IdeaCreateRequest{
        public String title;
        public String description;
        public String deadline;
    }

    public static class IdeaPageRequest{
        public int page;
        public int limit;
    }

    public static class IdeaPage{
        public IdeaPage(List<Idea> ideas, int total){
            this.ideas = ideas.stream().map(SimpleIdea::new).collect(Collectors.toList());
            this.total = total;
        }
        public List<SimpleIdea> ideas;
        public int total;
    }

    private static class SimpleIdea{
        public SimpleIdea(Idea idea){
            this.id = idea.getId();
            this.title = idea.getTitle();
            this.description = idea.getDescription();
            this.deadline = idea.getDeadline();
            this.createdAt = idea.getCreatedAt();
        }
        public int id;
        public String title;
        public String description;
        public String deadline;
        @JsonProperty("created_at")
        public LocalDateTime createdAt;
    }

    public static class IdeaDetail{
        public IdeaDetail(Idea idea){
            this.id = idea.getId();
            this.title = idea.getTitle();
            this.description = idea.getDescription();
            this.deadline = idea.getDeadline();
            this.createdAt = idea.getCreatedAt();
            this.comments = idea.getComments().stream().map(c->new CommentInIdea(c)).collect(Collectors.toList());
        }
        public int id;
        public String title;
        public String description;
        public String deadline;
        @JsonProperty("created_at")
        public LocalDateTime createdAt;
        public List<CommentInIdea> comments;
    }

    private static class CommentInIdea{
        public CommentInIdea(Comment comment){
            this.id = comment.getId();
            this.comment = comment.getComment();
            this.createdAt = comment.getCreatedAt();
        }
        public int id;
        public String comment;
        @JsonProperty("created_at")
        public LocalDateTime createdAt;
    }







    public static class CreatedIdea{

        public CreatedIdea(Idea idea){
            this.id = idea.getId();
            this.title = idea.getTitle();
            this.description = idea.getDescription();
            this.deadline = idea.getDeadline();
            this.createdAt = idea.getCreatedAt();
        }

        public int id;
        public String title;
        public String description;
        public String deadline;
        @JsonProperty("created_at")
        public LocalDateTime createdAt;
    }


}
