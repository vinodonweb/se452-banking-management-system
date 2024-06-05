package com.bank.management.balanceEnquiry;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "balance_enquiry")
public class BalanceEnquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;

    @Column(name = "account_number", unique = true, nullable = false)
    private String accountNumber;

    @Column(name = "balance", nullable = false)
    private Double balanceAmount;

    @Column(name = "currency", nullable = false)
    private String currency;
}
