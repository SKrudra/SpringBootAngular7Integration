package com.sba6.srm.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.*;

@Entity
@Getter @Setter
@AllArgsConstructor
public class Employee {
	@Id @GeneratedValue
	private int empId;
	private String empName;
	private int empMgr;
	private String empDesignation;
	private String empDepartment;
	@Lob
	private byte[] empImg; 
}
