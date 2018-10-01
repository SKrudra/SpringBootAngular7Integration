package com.sba6.srm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.LoginDetail;
import com.sba6.srm.repository.LoginDetailRepository;

@Service
public class LoginDetailService {

	@Autowired
	private LoginDetailRepository repository;
	
	public List<LoginDetail> getLoginDetails(){
		return repository.findAll();
	}
	
	public LoginDetail getLoginDetail(Long id){
		return getLoginDetails().stream().filter(l -> l.getId().equals(id)).findFirst().get();
	}
	
	public void addLoginDetail(LoginDetail loginDetail){
		repository.save(loginDetail);
	}
	
	public void deleteLoginDetail(LoginDetail loginDetail){
		repository.save(loginDetail);
	}
	
}
