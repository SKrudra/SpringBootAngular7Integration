package com.sba6.srm.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.entity.Request;
import com.sba6.srm.service.EmailService;
import com.sba6.srm.service.EmployeeService;
import com.sba6.srm.service.RequestService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(value = "Request-controller")
public class RequestController {

	@Autowired
	private EmployeeService employeeService;
	@Autowired
	private RequestService requestService;
	@Autowired
	private EmailService emailService;

	@ApiOperation(value = "Get requests for manager ")
	@Transactional
	@GetMapping(value = "/api/requests/{mgrId}")
	public List<Request> getRequestsForManager(@PathVariable Long mgrId) {
		return requestService.getRequestsForManager(mgrId);
	}

	@ApiOperation(value = "Update Request Status")
	@PutMapping(value = "/api/request", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity updateRequestStatus(@RequestBody Request updateRequest) {
		Request req = requestService.getRequestById(updateRequest.getId());
		req.setStatus(updateRequest.getStatus());
		if (updateRequest.getComment() != null && updateRequest.getComment() != "") {
			req.setComment(updateRequest.getComment());
		}
		requestService.updateRequest(req);
		emailService.mailRequestStatusUpdate(req, "ps2@gmail.com");
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@ApiOperation(value = "Get Request for employee")
	@GetMapping(value = "/api/emp/requests/{empId}")
	public Request getRequest(@PathVariable Long empId) {
		return requestService.getRequestForEmployee(empId);
	}

	@ApiOperation(value = "Create request for employee")
	@PostMapping(value = "/api/request")
	public ResponseEntity createRequest(@RequestBody Request newRequest) {
		Employee emp = employeeService.getEmployee(newRequest.getEmployee().getId());
		Request req = newRequest;
		req.setEmployee(emp);
		requestService.addRequest(req);
		emailService.mailAddRequest(req, "ps2@gmail.com");
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@ApiOperation(value = "Get employee details")
	@GetMapping(value = "/api/emp/{empId}")
	public Employee getEmployee(@PathVariable Long empId) {
		return employeeService.getEmployee(empId);
	}

}
