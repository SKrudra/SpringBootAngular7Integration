package com.sba6.srm.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.entity.Request;
import com.sba6.srm.repository.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository repository;
	
	public List<Employee> getEmployees(){
		return repository.findAll();
	}
	
	public Employee getEmployee(Long id){
		return getEmployees().stream().filter(e -> e.getId().equals(id)).findFirst().get();
	}
	
	public void addEmployee(Employee employee){
		repository.save(employee);
	}
	
	public void deleteEmployee(Employee employee){
		repository.delete(employee);
	}
	
	public Request getRequest(Long id){
		return getEmployee(id).getRequest();
	}
	
	public List<Request> getRequestsAsManager(Long id){
		List<Employee> employees = repository.findByMgrId(id);
		List<Request> requests = new ArrayList<Request>();
		for(Employee employee : employees){
			requests.add(employee.getRequest());
		}
		return requests;
	}
	
	
	//UPDATE 
	
	
}
