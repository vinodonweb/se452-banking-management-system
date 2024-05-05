package com.bank.management.BalanceEnquiry;

public class BalanceEnquiry {
    private Long accountId;  // Unique identifier for the account
    private Double balance;  // Current balance of the account

    // Getters and setters
    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }
}
