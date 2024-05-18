package com.bank.management.Deposit;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Deposit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long depositId;

    @Column(name="transaction_number")
    private String transactionNumber;

    @Column(name = "account_number")
    private String AccountNumber;

    @Column(name = "amount")
    private double amount;

    @Column(name = "deposit_date")
    private String depositDate;

    @Column(name="notes")
    private String notes;
}