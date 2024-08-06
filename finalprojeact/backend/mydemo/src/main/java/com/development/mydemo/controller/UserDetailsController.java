package com.development.mydemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.development.mydemo.model.UserDetails;
import com.development.mydemo.service.UserDetailsService;

@RestController
public class UserDetailsController {
    
    @Autowired
    private UserDetailsService userDetailsService;

    // POST
    @PostMapping("/adduser")
    public ResponseEntity<UserDetails> addUserData(@RequestBody UserDetails userDetails) {
        UserDetails ud = userDetailsService.createUserDetails(userDetails);
        return new ResponseEntity<>(ud, HttpStatus.CREATED);
    }

    // GET
    @GetMapping("/getuserdata")
    public ResponseEntity<List<UserDetails>> showUserData() {
        return new ResponseEntity<>(userDetailsService.getUserDetails(), HttpStatus.OK);
    }

    // PUT
    @PutMapping("/putuserdata/{id}")
    public ResponseEntity<UserDetails> updateUserDetails(@PathVariable("id") int id, @RequestBody UserDetails userDetails) {
        if (userDetailsService.updateUserDetails(id, userDetails)) {
            return new ResponseEntity<>(userDetails, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    // DELETE
    @DeleteMapping("/deleteuserdata/{id}")
    public ResponseEntity<Boolean> deleteUserData(@PathVariable("id") int id) {
        if (userDetailsService.deleteUserDetails(id)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}










