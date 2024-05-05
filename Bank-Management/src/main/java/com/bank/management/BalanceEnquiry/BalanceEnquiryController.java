package com.bank.management.BalanceEnquiry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/balance")
public class BalanceEnquiryController {

    @Autowired
    private BalanceEnquiryService balanceEnquiryService;

    // Endpoint to retrieve balance for a given account ID
    @GetMapping("/check")
    public Double checkBalance(@RequestParam Long accountId) {
        return balanceEnquiryService.getBalance(accountId);
    }
}