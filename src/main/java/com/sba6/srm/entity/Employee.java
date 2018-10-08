package com.sba6.srm.entity;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.*;

@Entity
@Table(name="employee")
@JsonIgnoreProperties
public @Data class Employee {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private Long id;
	
	@Column(name="FIRST_NAME")
	private String firstName;
	
	@Column(name="LAST_NAME")
	private String lastName;
	
	@Column(name="MGR_ID")
	private Long mgrId;
	
	@Column(name="DESIGNATION")
	private String designation;
	
	@Column(name="DEPARTMENT")
	private String department;
	
	@Lob
	@Column(name="IMG")
	private byte[] img;
	
	@JsonIgnore
	@OneToOne(mappedBy="employee")
	private LoginDetail loginDetail;
	
	@JsonIgnore
	@OneToMany(mappedBy="employee")
	private List<Request> request;
	
}
