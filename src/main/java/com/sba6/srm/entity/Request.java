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
	@Column
	private Long id;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private Long empId;
}
