package com.bank.management.BalanceEnquiry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BalanceEnquiryService {

    @Autowired
    private BalanceEnquiryRepository balanceEnquiryRepository;


        public Double getBalance(Long accountId) {
            return 1000.0;
        }
    }
