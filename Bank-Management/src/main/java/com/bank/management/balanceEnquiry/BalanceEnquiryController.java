package com.bank.management.balanceenquiry;

import com.bank.management.balanceEnquiry.BalanceEnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/balance")
public class BalanceEnquiryController {

    @Autowired
    private BalanceEnquiryService balanceEnquiryService;

    // Endpoint to retrieve balance for a given account ID

}
