package com.sba6.srm.controller;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sba6.srm.entity.Request;
import com.sba6.srm.enumsconstants.RequestStatus;
import com.sba6.srm.service.EmployeeService;
import com.sba6.srm.service.RequestService;

/*
1. GET Requests for manager 
GET/requests/{mgrId} 
(Change getRequestsForManager query to show only !inactivated requests )

2. Update Request Status 
PUT/request/{EmpId}

3. Send Request for employee 
GET/request/{empId}

4. create request for employee 
POST/request


 */
@RestController
public class RequestController {
	
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private RequestService requestService;
	
	
	//1. GET Requests for manager GET/requests/{mgrId} 
	@RequestMapping(value = "/api/requests/{mgrId}", method = RequestMethod.GET)
	public List<Request> getRequestsForManager(@PathVariable Long mgrId){
		List<Object[]> queryResult =  this.employeeService.getRequestsForManager(mgrId);
		List<Request> requestsForManager = new ArrayList<>();
		for(Object[] o : queryResult){
			Request r = new Request();
			r.setId(((BigInteger)o[0]).longValue());
			r.setComment((String)o[1]);
			r.setRequestDescription((String)o[2]);
			r.setRequestStatus(RequestStatus.valueOf((String)o[3]));
			r.setEmployee( employeeService.getEmployee( ( (BigInteger)o[4] ).longValue() ) );
			
			requestsForManager.add(r);
		}
		return requestsForManager;
	}
	
	//2. Update Request Status PUT/request/{EmpId}
	@RequestMapping(value="/request/{empId}", method=RequestMethod.PUT)
	public void updateRequestStatus(@PathVariable Long empId, RequestStatus requestStatus){
		requestService.setRequestStatus(requestStatus, empId);
	}
	
	//3. Send Request for employee GET/request/{empId}
	@RequestMapping(value="/request/{empId}", method=RequestMethod.GET)
	public Request getRequest(@PathVariable Long empId){
		return employeeService.getRequest(empId);
	}
	
	//4. create request for employee POST/request
	@RequestMapping(value="/request", method=RequestMethod.POST)
	public void createRequest(@RequestBody Request newRequest){
		requestService.addRequest(newRequest);
	}
	
	
}
