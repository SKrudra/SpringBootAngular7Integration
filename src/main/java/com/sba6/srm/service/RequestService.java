package com.sba6.srm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Request;
import com.sba6.srm.enumsconstants.RequestStatus;
import com.sba6.srm.repository.EmployeeRepository;
import com.sba6.srm.repository.RequestRepository;

@Service
public class RequestService {
	
	@Autowired
	private RequestRepository requestRepository;
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public void addRequest(Request request){
		requestRepository.save(request);
	}
	
	public void setRequestStatus(RequestStatus requestStatus, Long empId){
		//TODO
	}
	
	
}