package com.bank.management.Signup;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Enumerated(EnumType.STRING)
    @Column(name="account_type")
    private AccountType accountType;

    public enum AccountType {
        SAVINGS,
        CHECKING,
    }

    // Other signup attributes can be added here
}
