package com.sba6.srm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "reason")
public @Data class Reason {
	
	@Id @GeneratedValue
	@Column(name = "ID")
	private Long id;
		
	@Column(name= "DESCRIPTION")
	String 	description;
}
