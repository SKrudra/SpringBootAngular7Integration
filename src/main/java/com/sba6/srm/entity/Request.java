package com.sba6.srm.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sba6.srm.enumsconstants.RequestStatus;


@JsonIdentityInfo(
generator = ObjectIdGenerators.PropertyGenerator.class, 
property = "id")
@JsonIgnoreProperties
@Entity
@Table(name="request")
public @Data class Request {
	
	@Id @GeneratedValue
	@Column(name="ID")
	private Long id;
	
	@OneToOne
	@JoinColumn(name="EMP_ID")
	private Employee employee;
	
	@Column(name="REQUEST_DESCRIPTION")
	private String requestDescription;
	
	@Enumerated(EnumType.STRING)
	@Column(name="STATUS")
	private RequestStatus requestStatus;
	
	@Column(name="COMMENT")
	private String comment;
			
}
