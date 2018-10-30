package com.sba6.srm.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Table(name = "reason")
public @Data class Reason {
	
	@Id @GeneratedValue
	@Column(name = "ID")
	private Long id;
		
	@Column(name= "REASON_DESC")
	String 	reasonDesc;
	
	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL)
	@JoinTable(name="request_reasons",
    joinColumns={@JoinColumn(name="reason_id", referencedColumnName="id")},
    inverseJoinColumns={@JoinColumn(name="request_id", referencedColumnName="id")})
	List<Request> request;
	
}
