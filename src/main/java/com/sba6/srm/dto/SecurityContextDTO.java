package com.sba6.srm.dto;

import lombok.Data;

public @Data class SecurityContextDTO {
	Long id;
	String role;
	String firstName;
	String lastName;
	String email;
	String token;
}
