package com.bank.management.signup;

import com.fasterxml.jackson.databind.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.*;

import java.time.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Signup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Signup_id", unique = true, nullable = false)
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
