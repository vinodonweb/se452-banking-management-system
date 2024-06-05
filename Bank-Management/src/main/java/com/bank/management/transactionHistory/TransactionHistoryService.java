package com.bank.management.transactionHistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionHistoryService {

    @Autowired
    private TransactionHistoryRepository transactionHistoryRepository;

    public TransactionHistory createTransaction(TransactionHistory transactionHistory) {
        return transactionHistoryRepository.save(transactionHistory);
    }

    public List<TransactionHistory> getTransactionHistoryByAccountNumber(String accountNumber) {
        return transactionHistoryRepository.findTransactionsByAccountNumber(accountNumber);
    }
}
