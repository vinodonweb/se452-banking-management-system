package com.bank.management.balanceEnquiry;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/balance")
@CrossOrigin(origins = "*") // Allow all origins
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
