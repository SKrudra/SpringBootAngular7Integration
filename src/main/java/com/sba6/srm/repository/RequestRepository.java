package com.sba6.srm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sba6.srm.entity.Request;

public interface RequestRepository  extends JpaRepository<Request, Long>{
	
	@Query("select r from Request r JOIN r.employee e where e.mgrId=:mgrId and r.employee.id=e.id and r.status!= 'INACTIVATED'")
	public List<Request> getRequestsForManager(@Param("mgrId") Long mgrId);
	
	@Query("select r from Request r JOIN r.employee e where e.id=:empid and r.employee.id=e.id and (r.status= 'OPEN' or r.status= 'PENDING')")
	public Request getRequestForEmployee(@Param("empid") Long empId);
}
