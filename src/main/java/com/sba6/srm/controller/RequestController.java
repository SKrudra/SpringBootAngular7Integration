package com.sba6.srm.controller;

import java.security.Principal;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.sba6.srm.bean.GoogleResponse;
import com.sba6.srm.bean.GoogleTokens;
import com.sba6.srm.dto.SecurityContextDTO;
import com.sba6.srm.entity.Comment;
import com.sba6.srm.entity.Employee;
import com.sba6.srm.entity.LoginDetail;
import com.sba6.srm.entity.Reason;
import com.sba6.srm.entity.Request;

import com.sba6.srm.service.CommentService;
import com.sba6.srm.service.EmailService;
import com.sba6.srm.service.EmployeeService;
import com.sba6.srm.service.ReasonService;
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
	@Autowired
	private CommentService commentService;
	@Autowired
	private ReasonService reasonService;
	
	
	//1. GET Requests for manager GET/api/requests/{mgrId}
	@PreAuthorize ("hasAuthority(T(com.sba6.srm.enumsconstants.LoginDetailRole).MANAGER.name())")
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
		req.setTentativeEndDtm(updateRequest.getTentativeEndDtm());
		requestService.updateRequest(req);
		emailService.mailRequestStatusUpdate(req, req.getEmployee().getEmail());
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@ApiOperation(value = "Get Request for employee")
	@GetMapping(value = "/api/emp/requests/{empId}")
	public Request getRequest(@PathVariable Long empId) {
		return requestService.getRequestForEmployee(empId);
	}

	@ApiOperation(value = "Create request for employee")
	@PostMapping(value = "/api/request")
	public ResponseEntity createRequest(@RequestBody Request request) {
		Employee emp = employeeService.getEmployee(request.getEmployee().getId());
		request.setEmployee(emp);
		Date dt = new Date();
		request.setStartDtm(dt);
		request.setTentativeEndDtm( Date.from( dt.toInstant().plus(10, ChronoUnit.DAYS) ) );
		requestService.addRequest(request);
		//add reasons in reason table
		//Request addedReq = requestService.getRequestForEmployee(emp.getId());
//		request.getReasons().forEach(res -> {
//			res.setRequest(addedReq);
//			reasonService.addReason(res);
//		});
		
		emailService.mailAddRequest(request, request.getEmployee().getEmail());
		return new ResponseEntity(HttpStatus.OK);
	}
	
	//6. Add request comment POST/api/request/comment
	@ApiOperation(value = "Add request comment")
	@PostMapping(value="/api/request/comment")
	public ResponseEntity addComment(@RequestBody Comment newComment){
		commentService.addComment(newComment);
		return new ResponseEntity(HttpStatus.OK);
	}
	
	//7. Get comments for request GET/api/request/comment/{requestId}
	@ApiOperation(value = "Get comments for request")
	@GetMapping(value="/api/request/comment/{requestId}")
	public List<Comment> getCommentsForRequest(@PathVariable Long requestId){
		return commentService.getCommentsForRequest(requestId);
	}
	
}
