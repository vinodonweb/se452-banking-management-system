package com.bank.management.transactionHistory;

import jakarta.persistence.*;
import lombok.*;

import java.time.*;


@Data
@Entity
public class TransactionHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long id;

    @Column(name="transaction_number")
    private String transactionNumber;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "timestamp")
    private LocalDateTime timestamp;

    //constructor created by vinod
    public TransactionHistory(Long depositId, String transactionNumber, String accountNumber, double amount, String deposit, String format) {
    }

    //constructor created by vinod
    public TransactionHistory() {

    }
}
