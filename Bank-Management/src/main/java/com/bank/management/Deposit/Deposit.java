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
    private int transactionNumber;

    @Column(name = "source_account_number")
    private String sourceAccountNumber;

    @Column(name = "destination_account_number")
    private String destinationAccountNumber;

    @Column(name = "amount")
    private double amount;

    @Column(name = "deposit_date")
    private LocalDateTime depositDate;

    @Column(name="notes")
    private String notes;
}