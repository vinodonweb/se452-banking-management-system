package com.bank.management.TransactionHistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/transactions")
public class TransactionHistoryController {

    @Autowired
    private TransactionHistoryService transactionHistoryService;

    // Endpoint to get transaction history for a specific account
    @GetMapping("/history")
    public List<TransactionHistory> getTransactionHistory(@RequestParam Long accountId) {
        return transactionHistoryService.getTransactionHistory(accountId);
    }
}