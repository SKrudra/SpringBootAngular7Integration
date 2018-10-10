package com.sba6.srm.utility;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

@Service
public class EmailService {

	public boolean sendMail(String recipientMailId, String mailSubject, String mailContent) {

		final String username = "manishsharmaps2@gmail.com";
		final String password = "iammangod961234";

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });

		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("tyawtyaw@gmail.com"));
			message.setRecipients(Message.RecipientType.TO,
				InternetAddress.parse(recipientMailId));
			message.setSubject(mailSubject);
			message.setText(mailContent);
			
			Transport.send(message);

			return true;

		} catch (MessagingException e) {
			return false;
		}
	}
}