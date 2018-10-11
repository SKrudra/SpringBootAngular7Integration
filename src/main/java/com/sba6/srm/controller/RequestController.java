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
import com.sba6.srm.service.EmailService;
import com.sba6.srm.service.EmployeeService;
import com.sba6.srm.service.RequestService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

/*
1. GET Requests for manager 
GET/api/requests/{mgrId}  

2. Update Request Status 
PUT/api/request

3. Get Request for employee 
GET/api/emp/requests/{empId}

4. Create request for employee 
POST/api/request

5. Get employee details 
GET/api/emp/{empId}

 */
@RestController
@Api(value="Request-controller", description="Requests & Employees detail")
public class RequestController {
	
	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private RequestService requestService;
	@Autowired
	private EmailService emailService;
	
	
	//1. GET Requests for manager GET/api/requests/{mgrId}
	@ApiOperation(value = "Get requests for manager ")
	@Transactional
	@RequestMapping(value = "/api/requests/{mgrId}", method = RequestMethod.GET)
	public List<Request> getRequestsForManager(@PathVariable Long mgrId){
		List<Request> requestResult =  requestService.getRequestsForManager(mgrId);
		return requestResult;
	}
	
	//2. Update Request Status PUT/api/request
	@ApiOperation(value = "Update Request Status")
	@RequestMapping(value="/api/request", method=RequestMethod.PUT,produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity updateRequestStatus(@RequestBody Request updateRequest){
		Request req = requestService.getRequestById(updateRequest.getId());
		req.setStatus(updateRequest.getStatus());
		if(updateRequest.getComment()!=null && updateRequest.getComment()!="")
		{
			req.setComment(updateRequest.getComment());
		}
		requestService.updateRequest(req);
		emailService.mailRequestStatusUpdate(req, "ps2@gmail.com");
		return new ResponseEntity(HttpStatus.OK);
	}
	
	//3. Get Request for employee GET/api/emp/requests/{empId}
	@ApiOperation(value = "Get Request for employee")
	@RequestMapping(value="/api/emp/requests/{empId}", method=RequestMethod.GET)
	public Request getRequest(@PathVariable Long empId){
		return requestService.getRequestForEmployee(empId);
	}
	
	//4. Create request for employee POST/api/request
	@ApiOperation(value = "Create request for employee")
	@RequestMapping(value="/api/request", method=RequestMethod.POST)
	public ResponseEntity createRequest(@RequestBody Request newRequest){
		Employee emp = new Employee();
		emp = employeeService.getEmployee(newRequest.getEmployee().getId());
		Request req =newRequest;
		req.setEmployee(emp);
		requestService.addRequest(req);
		emailService.mailAddRequest(req, "ps2@gmail.com");
		return new ResponseEntity(HttpStatus.OK);
	}
	
	//5. Get employee details GET/api/emp/{empId}
	@ApiOperation(value = "Get employee details")
	@RequestMapping(value="/api/emp/{empId}", method = RequestMethod.GET)
	public Employee getEmployee(@PathVariable Long empId){
		return employeeService.getEmployee(empId);
	}
	
	
}
