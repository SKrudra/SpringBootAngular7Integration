package com.sba6.srm.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sba6.srm.enumsconstants.LoginDetailRole;

import lombok.*;
 	  	  	  
@JsonIdentityInfo(
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "id")
@Entity
@JsonIgnoreProperties
@Table(name="login_detail")
public @Data class LoginDetail {
	
	@Id @GeneratedValue
	@Column(name="ID")
	private Long id;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="EMP_ID")
	private Employee employee;
	
	@Column(name="USERNAME")
	private String userName;
	
	@Column(name="PASSWORD")
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(name="ROLE")
	private LoginDetailRole role;
}
