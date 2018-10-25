package com.sba6.srm.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
public @Data class GoogleResponse {
	
	private String picture;
	private boolean verified_email;
	private String link;
	private String id;
	private String email;
	
}
