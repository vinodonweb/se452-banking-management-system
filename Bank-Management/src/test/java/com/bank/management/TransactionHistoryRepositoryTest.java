package com.bank.management;

import com.bank.management.transactionHistory.TransactionHistory;
import com.bank.management.transactionHistory.TransactionHistoryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@ActiveProfiles("test")
@Transactional
public class TransactionHistoryRepositoryTest {

    @Autowired
    private TransactionHistoryRepository transactionHistoryRepository;

    @DisplayName("Test saving and retrieving transaction history")
    @Test
    public void testFindByAccountNumber() {
        // Create a new TransactionHistory instance and save it
        TransactionHistory transaction = new TransactionHistory();
        transaction.setAccountNumber("1234567890");
        transaction.setAmount(100.00);
        transaction.setTransactionType("deposit");
        transaction.setTimestamp(LocalDateTime.of(2024, 5, 19, 12, 0));

        // Save and flush the transaction to ensure it is written to the database
        transactionHistoryRepository.saveAndFlush(transaction);

        // Retrieve the transactions using the account number
        List<TransactionHistory> retrievedTransactions = transactionHistoryRepository.findTransactionsByAccountNumber("1234567890");

        // Assertions to check if the retrieved transactions are as expected
        assertFalse(retrievedTransactions.isEmpty(), "Transaction history should not be empty");
        assertEquals(1, retrievedTransactions.size(), "There should be one transaction history record");
        assertEquals("1234567890", retrievedTransactions.get(0).getAccountNumber());
        assertEquals(100.00, retrievedTransactions.get(0).getAmount());
    }
}
