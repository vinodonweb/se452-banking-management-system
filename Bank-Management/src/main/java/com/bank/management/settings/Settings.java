package com.bank.management.settings;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Settings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Column(name = "customer_name")
    private int customerName;

    @Column(name = "customer_address")
    private String customerAddress;

    @Column(name = "email_address")
    private String emailAddress;

    @Column(name = "phone_number")
    private double amount;

    @Column(name = "annual_income")
    private LocalDateTime annualIncome;
}
