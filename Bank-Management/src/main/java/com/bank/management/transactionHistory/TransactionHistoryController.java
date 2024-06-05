
package com.bank.management.transactionHistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transactions")
public class TransactionHistoryController {

    @Autowired
    private TransactionHistoryService transactionHistoryService;

    @PostMapping
    public ResponseEntity<TransactionHistory> createTransaction(@RequestBody TransactionHistory transactionHistory) {
        TransactionHistory createdTransaction = transactionHistoryService.createTransaction(transactionHistory);
        return ResponseEntity.ok(createdTransaction);
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<List<TransactionHistory>> getTransactionHistory(@PathVariable String accountNumber) {
        List<TransactionHistory> transactions = transactionHistoryService.getTransactionHistoryByAccountNumber(accountNumber);
        return ResponseEntity.ok(transactions);
    }
}
