package com.bank.management.TransactionHistory;

import java.util.Date;

public class TransactionHistory {
    private Long transactionId;  // Unique identifier for the transaction
    private Date transactionDate;  // Date of the transaction
    private Double amount;  // Transaction amount
    private String transactionType;  // Type of transaction (e.g., deposit, withdrawal)

    // Getters and setters
    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }
}