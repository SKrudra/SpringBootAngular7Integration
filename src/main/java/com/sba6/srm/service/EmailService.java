package com.sba6.srm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sba6.srm.entity.Request;
import com.sba6.srm.utility.MailClient;

@Service
public class EmailService {

	@Autowired
	private MailClient mailClient;
	
	public boolean sendMail(String recipient, String subject, String message) {
		mailClient.prepareAndSend(recipient, subject, message);
		return true;
	}
	
	public boolean mailAddRequest(Request request,String recipient){
		String subject = "SRM - Added Request";
		String message = request.getEmployee().getFirstName() + request.getEmployee().getLastName() + " with employee ID : "
		+ request.getEmployee().getId() + " created a request : \n" +  request.getDescription();
		return sendMail(recipient, subject, message);
	}
	
	public boolean mailRequestStatusUpdate(Request request, String recipient){
		String subject = "SRM - " + request.getStatus() + " Request";
		String message = request.getStatus() + " Request . \n" + "Requested by : " + 
		request.getEmployee().getFirstName() + request.getEmployee().getLastName() + 
		" with employee ID : "+ request.getEmployee().getId() + "\n\n" +
		"Request : " + request.getDescription();
		return sendMail(recipient, subject, message);
	}
}