package com.sba6.srm.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sba6.srm.entity.LoginDetail;

public interface LoginDetailRepository extends JpaRepository<LoginDetail, Long> {

	public LoginDetail findByUserName(String userName);
}
