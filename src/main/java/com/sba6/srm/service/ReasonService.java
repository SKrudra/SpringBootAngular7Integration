package com.sba6.srm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Reason;
import com.sba6.srm.entity.Request;
import com.sba6.srm.repository.ReasonRepository;

@Service
public class ReasonService {
	
	@Autowired
	private ReasonRepository reasonRepository;
	
	public void addReasonsForRequest(Request request){
		request.getReasons().forEach(reason -> {
			reasonRepository.save(reason);
		});
	}
	
	public void addReason(Reason reason) {
		reasonRepository.save(reason);
	}
}
