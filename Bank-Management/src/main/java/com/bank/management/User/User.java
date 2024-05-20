package com.bank.management.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.*;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String fullName;

    @Column
    private String email;

  
    public User() {
    }

    public User(Long id, String username, String fullName, String email) {
        this.id = id;
        this.username = username;
        this.fullName = fullName;
        this.email = email;
    }

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
      this.id = id;
  }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
      this.username = username;
  }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
      this.fullName = fullName;
  }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
      this.email = email;
  }
    
}
