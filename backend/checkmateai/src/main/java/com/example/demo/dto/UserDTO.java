package com.example.demo.dto;

public class UserDTO {
	private int id;
    private String name;
    private String email;

    public UserDTO(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getters and Setters
    public int getId() { return id; }
    public String getName() { return name; }
    public String getEmail() { return email; }

}
