package com.bank.management.TransactionHistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionHistoryService {

    @Autowired
    private TransactionHistoryRepository transactionHistoryRepository;

    // Method to retrieve a list of all transactions for a given account
    public List<TransactionHistory> getTransactionHistory(Long accountId) {
        return transactionHistoryRepository.findByAccountId(accountId);
    }
}