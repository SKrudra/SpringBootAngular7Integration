package com.sba6.srm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.entity.Request;
import com.sba6.srm.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public Employee getEmployee(Long id){
		return employeeRepository.findAll().stream().filter(e -> e.getId().equals(id)).findFirst().get();
	}
	
	public Request getRequest(Long id){
		return getEmployee(id).getRequest();
	}
	
	public List<Request> getRequestsForManager(Long id){
		return employeeRepository.getRequestsForManager(id);
	}	

}
