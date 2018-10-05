package com.sba6.srm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sba6.srm.entity.Employee;
import com.sba6.srm.entity.Request;

public interface RequestRepository  extends JpaRepository<Request, Integer>{
	public Request findByEmployee(Employee employee);
	//@Query(nativeQuery = true, value="SELECT r.ID,r.COMMENT,r.REQUEST_DESCRIPTION,r.STATUS,r.EMP_ID FROM employee e, request r WHERE e.MGR_ID = :mgrId AND r.EMP_ID = e.ID AND r.STATUS != 'INACTIVATED' order by r.id desc", name = "RequestResult" )
	@Query("select r from Request r JOIN r.employee e where e.mgrId=:mgrId and r.employee.id=e.id and r.requestStatus!= 'INACTIVATED'")
	public List<Request> getRequestsForManager(@Param("mgrId") Long mgrId);
}
