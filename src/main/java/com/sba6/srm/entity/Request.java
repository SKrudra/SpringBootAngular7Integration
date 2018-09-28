package com.sba6.srm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;

@Entity
@Table(name="request")
public @Data class Request {
	@Id @GeneratedValue
	@Column(name="ID")
	private Long id;
	@Column(name="EMP_ID")
	private String firstName;
	@Column(name="FIRST_NAME")
	private String lastName;
	@Column(name="LAST_NAME")
	private Long empId;
}
