package com.bank.management.BalanceEnquiry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BalanceEnquiryService {

    @Autowired
    private BalanceEnquiryRepository balanceEnquiryRepository;

    // Business method to get the balance of a specific account
    public Double getBalance(Long accountId) {
        return balanceEnquiryRepository.findBalanceByAccountId(accountId);
    }
}