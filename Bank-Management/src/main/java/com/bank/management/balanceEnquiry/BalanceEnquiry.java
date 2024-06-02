package com.bank.management.balanceEnquiry;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class BalanceEnquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "balance")
    private Double balanceAmount;

    @Column(name = "currency")
    private String currency;
}