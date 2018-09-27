package com.sba6.srm.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.*;

@Entity
@Getter @Setter
@AllArgsConstructor
public class Request {
	@Id @GeneratedValue
	private int reqId;
	private String reqName;
	private int empId;
}
