package com.bank.management;

import com.bank.management.balanceenquiry.BalanceEnquiry;
import com.bank.management.balanceenquiry.BalanceEnquiryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@DataJpaTest
@ActiveProfiles("test")
public class BalanceEnquiryRepositoryTest {

    @Autowired
    private BalanceEnquiryRepository balanceEnquiryRepository;

    @DisplayName("Test saving and retrieving balance enquiry by account number")
    @Test
    public void testFindByAccountNumber() {
        // Create a new BalanceEnquiry instance and save it
        BalanceEnquiry balanceEnquiry = new BalanceEnquiry();
        balanceEnquiry.setAccountNumber("1234567890");  // Set account number
        balanceEnquiry.setBalance(1000.00);

        long beforeSave = balanceEnquiryRepository.count();
        balanceEnquiryRepository.save(balanceEnquiry);
        long afterSave = balanceEnquiryRepository.count();

        // Retrieve the balance using the account number
        Double retrievedBalance = balanceEnquiryRepository.findBalanceByAccountNumber("1234567890");

        // Assertions to check if the retrieved balance is as expected
        assertNotNull(retrievedBalance, "Balance should not be null");
        assertEquals(1000.00, retrievedBalance, 0.001, "The balance should be 1000.00");
        assertEquals(beforeSave + 1, afterSave, "The count should increase by one after saving a balance enquiry");
    }
}
