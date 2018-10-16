package com.sba6.srm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.sba6.srm.enumsconstants.LoginDetailRole;


import lombok.Data;

@Entity
@Table(name="comment")
public @Data class Comment {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@Column(name="REQ_ID")
	private Long requestId;
	
	@Enumerated(EnumType.STRING)
	@Column(name="ROLE")
	private LoginDetailRole role;
	
	@Column(name="CONTENT")
	private String content;
		
}
