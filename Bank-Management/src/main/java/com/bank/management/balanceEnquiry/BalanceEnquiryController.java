package com.bank.management.balanceEnquiry;

import com.bank.management.balanceEnquiry.BalanceEnquiryService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/balance")
public class BalanceEnquiryController {

    @Autowired
    private BalanceEnquiryService balanceEnquiryService;

    @GetMapping("/{accountNumber}")
    public ResponseEntity<Double> getBalance(@PathVariable String accountNumber) {
        try {
            double balance = balanceEnquiryService.getBalanceByAccountNumber(accountNumber);
            return ResponseEntity.ok(balance);
        } catch (IllegalArgumentException | IllegalStateException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
