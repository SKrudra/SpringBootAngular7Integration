package com.sba6.srm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sba6.srm.entity.LoginDetail;
import com.sba6.srm.repository.LoginDetailRepository;
import com.sba6.srm.utility.UserPrincipal;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    LoginDetailRepository loginDetailRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        // Let people login with username
        LoginDetail user = loginDetailRepository.findByUserName(username);
        if(user==null)
        {
        	throw new UsernameNotFoundException("User Not found with given Id");
        }
        return UserPrincipal.create(user);
    }

    // This method is used by JWTAuthenticationFilter
    @Transactional
    public UserDetails loadUserById(Long id) {
    	LoginDetail user = loginDetailRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id : " + id)
    	        );;

        return UserPrincipal.create(user);
    }
}