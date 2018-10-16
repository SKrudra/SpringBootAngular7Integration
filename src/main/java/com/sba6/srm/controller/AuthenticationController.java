package com.sba6.srm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.sba6.srm.dto.SecurityContextDTO;
import com.sba6.srm.entity.LoginDetail;
import com.sba6.srm.repository.LoginDetailRepository;
import com.sba6.srm.utility.JwtTokenProvider;

@Controller
public class AuthenticationController {

	@Autowired
    AuthenticationManager authenticationManager;
	
	@Autowired
	LoginDetailRepository loginDetailRepository;
	
	@Autowired
	JwtTokenProvider tokenProvider;
	
	@PostMapping("/api/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDetail loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUserName(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        LoginDetail loggedInUser = loginDetailRepository.findByUserName(loginRequest.getUserName());
        String jwt = tokenProvider.generateToken(authentication);
        SecurityContextDTO sec = new SecurityContextDTO();
        sec.setId(loggedInUser.getEmployee().getId());
        sec.setEmail(loggedInUser.getEmployee().getEmail());
        sec.setFirstName(loggedInUser.getEmployee().getFirstName());
        sec.setLastName(loggedInUser.getEmployee().getLastName());
        sec.setRole(loggedInUser.getRole().name());
        sec.setToken(jwt);
        return ResponseEntity.ok(sec);
    }
}
