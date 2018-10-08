package com.sba6.srm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Request;
import com.sba6.srm.enumsconstants.RequestStatus;
import com.sba6.srm.repository.RequestRepository;

@Service
public class RequestService {
	
	@Autowired
	private RequestRepository requestRepository;
	
	public void addRequest(Request request){
		requestRepository.save(request);
	}
	
	public void updateRequest(Request request){
		requestRepository.save(request);
	}
		
	public List<Request> getRequestsForManager(Long id){
		return requestRepository.getRequestsForManager(id);
	}
	
	public Request getRequestById(Long id){
		return requestRepository.getOne(id);
	}
	
	public Request getRequestForEmployee(Long id){
		return requestRepository.getRequestForEmployee(id);
	}
	
}