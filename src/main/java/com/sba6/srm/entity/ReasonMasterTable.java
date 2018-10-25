package com.sba6.srm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="reasonmastertable")
public class ReasonMasterTable {
	
	@Id
	@Column(name="ID")
	private Long id;
	
	@Column(name="DESCRIPTION")
	private String description; 
}
