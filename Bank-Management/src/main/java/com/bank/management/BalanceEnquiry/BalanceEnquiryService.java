package com.bank.management.BalanceEnquiry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

/**
 * Service for managing balance enquiries.
 */
@Service
public class BalanceEnquiryService {

    @Autowired
    private BalanceEnquiryRepository balanceEnquiryRepository;

    // Regular expression for validating account number (10-digit numeric string)
    private static final Pattern ACCOUNT_NUMBER_PATTERN = Pattern.compile("\\d{10}");

    /**
     * Retrieves the balance for a given account number.
     *
     * @param accountNumber the account number
     * @return the balance for the account
     * @throws IllegalArgumentException if the account number is invalid
     * @throws IllegalStateException if no account is found
     */
    public double getBalanceByAccountNumber(String accountNumber) {
        // Validate account number
        validateAccountNumber(accountNumber);

        // Retrieve balance for the given account number
        Double balance = balanceEnquiryRepository.findBalanceByAccountNumber(accountNumber);

        // Validate that the account exists and balance is not null
        if (balance == null) {
            throw new IllegalStateException("Account not found for account number: " + accountNumber);
        }

        return balance;
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
