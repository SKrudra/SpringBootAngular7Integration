package com.sba6.srm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sba6.srm.entity.Reason;
import com.sba6.srm.repository.ReasonRepository;


@RestController
public class ReasonController {

	@Autowired
	ReasonRepository reasonRepository;
	
	@GetMapping("/api/reasons")
	public ResponseEntity<List<Reason>> getReasons()
	{
		return new ResponseEntity<>(reasonRepository.findAll(),HttpStatus.OK);
	}
}
