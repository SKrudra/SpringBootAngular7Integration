package com.sba6.srm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.repository.EmployeeRepository;

@Service
public class EmployeeService {

   @Autowired
   private EmployeeRepository employeeRepository;

   public Employee getEmployee(Long id) {
      Long mrgId = employeeRepository.findAll().stream().filter(m -> m.getId().equals(id)).findFirst().get().getMgrId();
      Employee manager = null;
      if (mrgId != null) {
         manager = employeeRepository.findAll().stream().filter(e -> e.getId().equals(mrgId)).findFirst().get();
      }
      Employee employee = employeeRepository.findAll().stream().filter(e -> e.getId().equals(id)).findFirst().get();
      if (manager != null) {
         employee.setManagerName(manager.getFirstName() + " " + manager.getLastName());
      }else {
         employee.setManagerName("");
      }
      return employee;
   }

}
