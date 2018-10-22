package com.sba6.srm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "reason")
public @Data class Reason {
	
	@Id @GeneratedValue
	@Column(name = "ID")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "REQ_ID")
	private Request request;
	
	@Column(name = "REASON_ID")
	private Long reasonId;
}
