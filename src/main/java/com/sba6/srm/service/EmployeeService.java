package com.sba6.srm.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	public Employee getEmployee(Long id){
		return employeeRepository.findAll().stream().filter(e -> e.getId().equals(id)).findFirst().get();
	}
	
	 public Employee getEmployeeManager(Long id) {
	      return employeeRepository.findAll().stream().filter(e -> e.getId().equals(
	               employeeRepository.findAll().stream().filter(m -> m.getId().equals(id)).findFirst().get().getMgrId()))
	               .findFirst().get();
	   }
	 
}
