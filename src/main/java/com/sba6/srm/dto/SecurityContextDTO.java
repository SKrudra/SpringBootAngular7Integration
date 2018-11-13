package com.sba6.srm.dto;

import lombok.Data;

public @Data class SecurityContextDTO {
	Long id;
	String email;
	String firstName;
	String lastName;
	String role;
	String token;
	String designation;
	String department;
	String managerName;
}
