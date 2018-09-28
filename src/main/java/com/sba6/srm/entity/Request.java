package com.sba6.srm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.*;

@Entity
@Table(name="request")
public @Data class Request {
	
	@Id @GeneratedValue
	@Column(name="ID")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="EMP_ID")
	private Employee employee;
	
	@Column(name="REQUEST_DESCRIPTION")
	private String requestDescription;
			
}
