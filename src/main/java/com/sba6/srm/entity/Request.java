package com.sba6.srm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.*;
import com.sba6.srm.enumsconstants.RequestStatus;

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
	
	@Column(name="STATUS")
	private RequestStatus requestStatus;
			
}
