
package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.UserDetails;;

public interface UserDetailsRepo extends JpaRepository<UserDetails,Integer>{
    
}
