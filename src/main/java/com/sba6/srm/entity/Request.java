package com.sba6.srm.entity;


import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sba6.srm.enumsconstants.RequestStatus;

import lombok.Data;


@JsonIdentityInfo(
generator = ObjectIdGenerators.PropertyGenerator.class, 
property = "id",scope=Request.class)
@JsonIgnoreProperties
@Entity
@Table(name="request")
public @Data class Request {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="EMP_ID")
	private Employee employee;
	
	@Column(name="REQUEST_DESCRIPTION")
	private String description;
	
	@Enumerated(EnumType.STRING)
	@Column(name="STATUS")
	private RequestStatus status;
	
	@Column(name="COMMENT")
	private String comment;
	
	@Column(name="START_DTM")
	private Date startDtm;
	
	@Column(name="TENTATIVE_END_DTM")
	private Date tentativeEndDtm;
	
	@ManyToMany
	private Set<Reason> reasons;  
	
}
