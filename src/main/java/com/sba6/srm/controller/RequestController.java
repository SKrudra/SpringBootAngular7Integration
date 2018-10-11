package com.sba6.srm.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.entity.Request;
import com.sba6.srm.service.EmployeeService;
import com.sba6.srm.service.RequestService;
import com.sba6.srm.utility.EmailService;

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

6. Get employee's manager details 
GET/api/empMgr/{empId}

 */
@RestController
public class RequestController {

   @Autowired
   private EmployeeService employeeService;
   @Autowired
   private RequestService requestService;
   @Autowired
   private EmailService emailService;

   // 1. GET Requests for manager GET/api/requests/{mgrId}
   @Transactional
   @RequestMapping(value = "/api/requests/{mgrId}", method = RequestMethod.GET)
   public List<Request> getRequestsForManager(@PathVariable Long mgrId) {
      List<Request> requestResult = requestService.getRequestsForManager(mgrId);
      emailService.sendMail("emailid", "Request Created", "Someone asked for employee detausk");
      return requestResult;
   }

   // 2. Update Request Status PUT/api/request
   @RequestMapping(value = "/api/request", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
   public ResponseEntity updateRequestStatus(@RequestBody Request updateRequest) {
      Request req = requestService.getRequestById(updateRequest.getId());
      req.setStatus(updateRequest.getStatus());
      if (updateRequest.getComment() != null && updateRequest.getComment() != "") {
         req.setComment(updateRequest.getComment());
      }
      requestService.updateRequest(req);
      return new ResponseEntity(HttpStatus.OK);
   }

   // 3. Get Request for employee GET/api/emp/requests/{empId}
   @RequestMapping(value = "/api/emp/requests/{empId}", method = RequestMethod.GET)
   public Request getRequest(@PathVariable Long empId) {
      emailService.sendMail("emailid@gmail.com", "Request Created", "Someone asked for employee detausk");
      return requestService.getRequestForEmployee(empId);
   }

   // 4. create request for employee POST/api/request
   @RequestMapping(value = "/api/request", method = RequestMethod.POST)
   public ResponseEntity createRequest(@RequestBody Request newRequest) {
      Employee emp = new Employee();
      emp = employeeService.getEmployee(newRequest.getEmployee().getId());
      Request req = newRequest;
      req.setEmployee(emp);
      requestService.addRequest(req);
      emailService.sendMail("emailid@gmail.com", "Request Created", "Someone created a request");
      return new ResponseEntity(HttpStatus.OK);
   }

   // 5. Get employee details GET/api/emp/{empId}
   @RequestMapping(value = "/api/emp/{empId}", method = RequestMethod.GET)
   public Employee getEmployee(@PathVariable Long empId) {
      return employeeService.getEmployee(empId);
   }

   // 6. Get employee's manager details GET/api/empMgr/{empId}
   @RequestMapping(value = "/api/empMgr/{empId}", method = RequestMethod.GET)
   public Employee getEmployeeManager(@PathVariable Long empId) {
      return employeeService.getEmployeeManager(empId);
   }

}
