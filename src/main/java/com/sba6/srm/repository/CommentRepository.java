package com.sba6.srm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sba6.srm.entity.Comment;

@RepositoryRestResource
public interface CommentRepository extends JpaRepository<Comment, Long>{

	public List<Comment> findByRequestId(Long requestId);
	
}
