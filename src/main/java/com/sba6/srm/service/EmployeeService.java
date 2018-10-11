package com.sba6.srm.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.repository.EmployeeRepository;

@Service
public class EmployeeService {

   @Autowired
   private EmployeeRepository employeeRepository;

   public Employee getEmployee(Long id) {
      Employee employee = employeeRepository.findById(id).get();
      Employee manager = null;
      if (employee.getMgrId() != null) {
         manager = employeeRepository.findById(employee.getMgrId()).get();
         employee.setManagerName(manager.getFirstName() + " " + manager.getLastName());
      } else {
         employee.setManagerName("");
      }
      return employee;
   }

}
