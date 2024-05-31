package com.bank.management.signup;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Signup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long signupId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(unique = true, name = "email")
    private String email;

    @CreationTimestamp
    @Column(name = "creation_date", updatable = false)
    private LocalDateTime creationDate;

    @JsonDeserialize(using = AccountTypeDeserializer.class)
    @Enumerated(EnumType.STRING)
    @Column(name="account_type")
    private AccountType accountType;


    public enum AccountType {
        SAVINGS,
        CHECKING,
    }

    // Other signup attributes can be added here
}
