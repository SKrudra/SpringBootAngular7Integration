package com.sba6.srm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.entity.Request;

public interface RequestRepository  extends JpaRepository<Request, Integer>{
	public Request findByEmployee(Employee employee);
}
