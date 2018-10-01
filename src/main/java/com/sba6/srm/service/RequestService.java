package com.sba6.srm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Request;
import com.sba6.srm.repository.RequestRepository;

@Service
public class RequestService {
	
	@Autowired
	private RequestRepository repository;
	
	public List<Request> getRequests(){
		return repository.findAll();
	}
	
	public Request getRequest(Long id){
		return getRequests().stream().filter(r -> r.getId().equals(id)).findFirst().get();
	}
	
	public void addRequest(Request request){
		repository.save(request);
	}
	
	public void deleteRequest(Request request){
		repository.delete(request);
	}
	
	public Long getRequestedByEmployeeId(Long reqId){
		return getRequest(reqId).getEmployee().getId();
	}
	
}
