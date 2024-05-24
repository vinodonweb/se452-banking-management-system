package com.bank.management;

import com.bank.management.TransactionHistory.TransactionHistory;
import com.bank.management.TransactionHistory.TransactionHistoryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@DataJpaTest
public class TransactionHistoryRepositoryTest {

    @Autowired
    private TransactionHistoryRepository transactionHistoryRepository;

    @DisplayName("Test saving and retrieving transaction history")
    @Test
    public void testFindByAccountNumber() {
        // Create a new TransactionHistory instance and save it
        TransactionHistory transaction = new TransactionHistory();
        transaction.setAccountNumber("1234567890");  // Set account number
        transaction.setAmount(100.00);
        transaction.setTransactionType("deposit");
        transaction.setTransactionDate("2024-05-19");

        long beforeSave = transactionHistoryRepository.count();
        transactionHistoryRepository.save(transaction);
        long afterSave = transactionHistoryRepository.count();

        // Retrieve the transactions using the account number
        List<TransactionHistory> retrievedTransactions = transactionHistoryRepository.findByAccountNumber("1234567890");

        // Assertions to check if the retrieved transactions are as expected
        assertFalse(retrievedTransactions.isEmpty(), "Transaction history should not be empty");
        assertEquals(1, retrievedTransactions.size(), "There should be one transaction history record");
        assertEquals(beforeSave + 1, afterSave, "The count should increase by one after saving a transaction");
    }
}
