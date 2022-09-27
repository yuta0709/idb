package com.example.api.dto;


import com.example.api.model.Comment;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDateTime;

public class CommentDto {

    public static class CreateRequest {
        public String comment;
    }


    public static class CreatedComment {

        public CreatedComment(Comment comment) {
            this.id = comment.getId();
            this.ideaId = comment.getIdea().getId();
            this.comment = comment.getComment();
            this.createdAt = comment.getCreatedAt();
        }

        public int id;

        @JsonProperty("idea_id")
        public int ideaId;
        public String comment;
        @JsonProperty("created_at")
        public LocalDateTime createdAt;

    }

}
