package com.sba6.srm.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sba6.srm.entity.Employee;
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
	@Transactional
	@RequestMapping(value = "/api/requests/{mgrId}", method = RequestMethod.GET)
	public List<Request> getRequestsForManager(@PathVariable Long mgrId){
		List<Request> requestResult =  this.requestService.getRequestsForManager(mgrId);
		//System.out.println(queryResult);
		return requestResult;
	}
	
	//2. Update Request Status PUT/request/{reqId}
//	@RequestMapping(value="/api/request", method=RequestMethod.PUT)
//	public ResponseEntity updateRequestStatus(@RequestBody Request updateRequest){
//		Request req = requestService.getRequestById(updateRequest.getId());
//		req.setRequestStatus(updateRequest.getRequestStatus());
//		if(updateRequest.getComment()!=null && updateRequest.getComment()!="")
//		{
//			req.setRequestDescription(updateRequest.getComment());
//		}
//		requestService.updateRequest(req);
//		return new ResponseEntity(HttpStatus.OK);
//	}
	
	@RequestMapping(value="/api/request", method=RequestMethod.PUT,produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity updateRequestStatus(@RequestBody Request updateRequest){
		Request req = requestService.getRequestById(updateRequest.getId());
		req.setRequestStatus(updateRequest.getRequestStatus());
		if(updateRequest.getComment()!=null && updateRequest.getComment()!="")
		{
			req.setComment(updateRequest.getComment());
		}
		requestService.updateRequest(req);
		return new ResponseEntity(HttpStatus.OK);
	}
	
	//3. Send Request for employee GET/request/{empId}
	@RequestMapping(value="/api/emp/requests/{empId}", method=RequestMethod.GET)
	public Request getRequest(@PathVariable Long empId){
		return requestService.getRequestForEmployee(empId);
	}
	
	//4. create request for employee POST/request
	@RequestMapping(value="/api/request", method=RequestMethod.POST)
	public ResponseEntity createRequest(@RequestBody Request newRequest){
		System.out.println(newRequest);
		Employee emp = new Employee();
		emp = employeeService.getEmployee(newRequest.getEmployee().getId());
		Request req =newRequest;
		req.setEmployee(emp);
		this.requestService.addRequest(req);
		return new ResponseEntity(HttpStatus.OK);
	}
	
	//5. Get employee details GET/api/emp/{empId}
	@RequestMapping(value="/api/emp/{empId}", method = RequestMethod.GET)
	public Employee getEmployee(@PathVariable Long empId){
		return employeeService.getEmployee(empId);
	}
	
	
}
