package com.sba6.srm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import com.sba6.srm.bean.GoogleResponse;
import com.sba6.srm.bean.GoogleTokens;
import com.sba6.srm.dto.SecurityContextDTO;
import com.sba6.srm.entity.Employee;
import com.sba6.srm.entity.LoginDetail;
import com.sba6.srm.repository.LoginDetailRepository;
import com.sba6.srm.service.EmployeeService;
import com.sba6.srm.utility.JwtTokenProvider;

@Controller
public class AuthenticationController {

	@Autowired
    AuthenticationManager authenticationManager;	
	@Autowired
	LoginDetailRepository loginDetailRepository;
	@Autowired
	private EmployeeService employeeService;
	
	
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
        sec.setDesignation(loggedInUser.getEmployee().getDesignation());
        sec.setDepartment(loggedInUser.getEmployee().getDepartment());
        sec.setManagerName(employeeService.getManagerName(loggedInUser.getEmployee()));
        return ResponseEntity.ok(sec);
    }
	
	@PostMapping(value="/api/google")
	public ResponseEntity googleLogin(@RequestBody String googleCode){
		
		//1. Get tokens by exchanging the google code
		final String postUrl = "https://accounts.google.com/o/oauth2/token";
		RestTemplate restTemplate = new RestTemplate();
		String input = "code="+googleCode+"&"
		+"client_id=&"
		+"client_secret=&"
		+"redirect_uri=http://localhost:4200/login&"
		+"grant_type=authorization_code";
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		HttpEntity<String> request = new HttpEntity<String>(input, headers);
		ResponseEntity<GoogleTokens> tokensResponse = restTemplate.postForEntity(postUrl, request, GoogleTokens.class);
			
		//2. Get email by sending access token
		String accessToken = tokensResponse.getBody().getAccess_token();
		String getUrl = "https://www.googleapis.com/oauth2/v2/userinfo";
		restTemplate = new RestTemplate();
		headers = new HttpHeaders();
		String authorizationInput = "Bearer "+accessToken;
		headers.set("Authorization", authorizationInput);
		request = new HttpEntity<>("parameters", headers);
		ResponseEntity<GoogleResponse> googleResponse = restTemplate.exchange(getUrl, HttpMethod.GET, request, GoogleResponse.class);
		
		//3. Verify email in db
		Employee theEmployee = employeeService.getEmployee(googleResponse.getBody().getEmail());
		if(theEmployee == null) {
			 return ResponseEntity.ok(null);
		}
		LoginDetail loginDetail = new LoginDetail();
		loginDetail.setUserName(theEmployee.getLoginDetail().getUserName());
		loginDetail.setPassword(theEmployee.getLoginDetail().getPassword());
		return authenticateUser(loginDetail);

	}
}
