package com.sba6.srm.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
public @Data class GoogleTokens {
	
	private String access_token;
	private String id_token;
	private Long expires_in;
	private String token_type;
	private String scope;
	private String refresh_token;
	
}