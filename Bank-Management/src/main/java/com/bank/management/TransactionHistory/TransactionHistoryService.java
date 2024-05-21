package com.bank.management.TransactionHistory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Pattern;

/**
 * Service for managing transaction history.
 */
@Service
public class TransactionHistoryService {

    @Autowired
    private TransactionHistoryRepository transactionHistoryRepository;

    // Regular expression for validating account number (10-digit numeric string)
    private static final Pattern ACCOUNT_NUMBER_PATTERN = Pattern.compile("\\d{10}");

    /**
     * Retrieves the transaction history for a given account number.
     *
     * @param accountNumber the account number
     * @return the list of transactions for the account
     * @throws IllegalArgumentException if the account number is invalid
     * @throws IllegalStateException if no transactions are found
     */
    public List<TransactionHistory> getTransactionHistoryByAccountNumber(String accountNumber) {
        // Validate account number
        validateAccountNumber(accountNumber);

        // Retrieve transaction history for the given account number
        List<TransactionHistory> transactions = transactionHistoryRepository.findByAccountNumber(accountNumber);

        // Validate that transactions exist
        if (transactions == null || transactions.isEmpty()) {
            throw new IllegalStateException("No transactions found for account number: " + accountNumber);
        }

        return transactions;
    }

    /**
     * Validates the account number.
     *
     * @param accountNumber the account number to validate
     * @throws IllegalArgumentException if the account number is invalid
     */
    private void validateAccountNumber(String accountNumber) {
        if (accountNumber == null || accountNumber.trim().isEmpty()) {
            throw new IllegalArgumentException("Account number cannot be null or empty.");
        }
        if (!ACCOUNT_NUMBER_PATTERN.matcher(accountNumber).matches()) {
            throw new IllegalArgumentException("Invalid account number. It must be a 10-digit number.");
        }
    }
}
