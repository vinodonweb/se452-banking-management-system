package com.bank.management.Withdraw;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Withdraw {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long withdrawId;

    @Column(name="transaction_number")
    private String transactionNumber;

    @Column(name = "withdrawal_type")
    private String withdrawalType;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "amount")
    private double amount;

    @Column(name = "withdrawal_date")
    private String withdrawalDate;

    @Column(name="notes")
    private String notes;
}
