package com.development.mydemo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.development.mydemo.model.UserDetails;
import com.development.mydemo.repository.UserDetailsRepository;

@Service
public class UserDetailsService {
    
    @Autowired
    private UserDetailsRepository userDetailsRepository;

    // Create
    public UserDetails createUserDetails(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }

    // Read
    public List<UserDetails> getUserDetails() {
        return userDetailsRepository.findAll();
    }

    // Update
    public boolean updateUserDetails(int id, UserDetails userDetails) {
        if (userDetailsRepository.existsById(id)) {
            userDetails.setId(id);
            userDetailsRepository.save(userDetails);
            return true;
        }
        return false;
    }

    // Delete
    public boolean deleteUserDetails(int id) {
        if (userDetailsRepository.existsById(id)) {
            userDetailsRepository.deleteById(id);
            return true;
        }
        return false;
    }
}






