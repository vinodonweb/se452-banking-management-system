package com.bank.management.balanceEnquiry;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.regex.Pattern;

@Service
@Log4j2
@AllArgsConstructor
public class BalanceEnquiryService {

    @Autowired
    private BalanceEnquiryRepository balanceEnquiryRepository;

    private static final Pattern ACCOUNT_NUMBER_PATTERN = Pattern.compile("\\d{10}");

    public double getBalanceByAccountNumber(String accountNumber) {
        validateAccountNumber(accountNumber);
        Double balance = balanceEnquiryRepository.findBalanceByAccountNumber(accountNumber);
        if (balance == null) {
            throw new IllegalStateException("Account not found for account number: " + accountNumber);
        }
        return balance;
    }

    private void validateAccountNumber(String accountNumber) {
        if (accountNumber == null || accountNumber.trim().isEmpty()) {
            throw new IllegalArgumentException("Account number cannot be null or empty.");
        }
        if (!ACCOUNT_NUMBER_PATTERN.matcher(accountNumber).matches()) {
            throw new IllegalArgumentException("Invalid account number. It must be a 10-digit number.");
        }
    }
}
