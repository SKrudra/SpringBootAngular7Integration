package com.sba6.srm.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sba6.srm.entity.Employee;


@RepositoryRestResource
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	
	@Query(nativeQuery = true, value="SELECT r.* FROM employee e, request r WHERE e.MGR_ID = :mgrId AND r.EMP_ID = e.ID AND r.STATUS != 'INACTIVATED' order by r.id desc", name = "RequestResult" )
	public List<Object[]> getRequestsForManager(@Param("mgrId") Long mgrId);
}

