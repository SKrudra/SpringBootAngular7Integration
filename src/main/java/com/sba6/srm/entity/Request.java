package com.sba6.srm.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sba6.srm.enumsconstants.RequestStatus;



@Entity
@Table(name="request")
public @Data class Request {
	
	@Id @GeneratedValue
	@Column(name="ID")
	private Long id;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name="EMP_ID")
	private Employee employee;
	
	@Column(name="REQUEST_DESCRIPTION")
	private String requestDescription;
	
	@Enumerated(EnumType.STRING)
	@Column(name="STATUS")
	private RequestStatus requestStatus;
			
}
