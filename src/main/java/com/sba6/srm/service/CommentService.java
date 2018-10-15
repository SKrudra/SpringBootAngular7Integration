package com.sba6.srm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Comment;
import com.sba6.srm.repository.CommentRepository;

@Service
public class CommentService {
	
	@Autowired
	private CommentRepository commentRepository;
	
	public void addComment(Comment comment){
		commentRepository.save(comment);
	}
	
	public List<Comment> getCommentsForRequest(Long requestId) {
		return commentRepository.findByRequestId(requestId);
	}
	
}
