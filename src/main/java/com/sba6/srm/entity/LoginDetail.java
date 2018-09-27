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
	@Column
	private Long id;
	@Column
	private Long empId;
	@Column
	private String userName;
	@Column
	private String password;
	@Column
	private Long role;
}
