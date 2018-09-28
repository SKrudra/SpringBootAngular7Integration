package com.sba6.srm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;
 	  	  	  

@Entity
@Table(name="login_detail")
public @Data class LoginDetail {
	@Id @GeneratedValue
	@Column(name="ID")
	private Long id;
	@Column(name="EMP_ID")
	private Long empId;
	@Column(name="USER_NAME")
	private String userName;
	@Column(name="PASSWORD")
	private String password;
	@Column(name="ROLE")
	private Long role;
}
