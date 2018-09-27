package com.sba6.srm.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor
public class LoginDetail {
	@Id @GeneratedValue
	private int empId;
	private String userName;
	private String password;
	private int role;
}
