package com.naukri.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naukri.dto.LoginDTO;
import com.naukri.dto.UserDTO;
import com.naukri.entity.User;
import com.naukri.middleware.JwtUtil;
import com.naukri.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class UserController {
	
	@Autowired
    private AuthenticationManager authenticationManager;
	
	@Autowired
    private JwtUtil jwtUtil;
	
	@Autowired
	private UserService useservice;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody UserDTO user) {
		try {
			User newUser = this.useservice.create(user);
			return ResponseEntity.ok(newUser);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body("Error: " + e.getMessage());
		}
	}
	
	@GetMapping("/users")
	public List<User> allUsers(){
		return useservice.getAllUsers();
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDTO request){
		try {
			authenticationManager.authenticate(
	                new UsernamePasswordAuthenticationToken(
	                        request.getEmail(),
	                        request.getPassword()
	                )
	        );

	        String token = jwtUtil.generateToken(request.getEmail());
	        return ResponseEntity.ok(Map.of("token", token));
		}catch( Exception e) {
			return ResponseEntity.badRequest().body("Error: " + e.getMessage());
		}
	}

}
