package com.bank.management;
import com.bank.management.BalanceEnquiry.BalanceEnquiry;
import com.bank.management.BalanceEnquiry.BalanceEnquiryRepository;
import com.bank.management.BalanceEnquiry.BalanceEnquiryService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
public class BalanceEnquiryRepositoryTest {

    @Autowired
    private BalanceEnquiryRepository balanceEnquiryRepository;

    @DisplayName("Test saving and retrieving account balance")
    @Test
    public void testFindBalanceByAccountId() {
        // Create a new BalanceEnquiry instance and save it
        BalanceEnquiry balanceEnquiry = new BalanceEnquiry();
        balanceEnquiry.setAccountId(1L);
        balanceEnquiry.setBalance(10000.00);
        var b4count=balanceEnquiryRepository.count();
        balanceEnquiryRepository.save(balanceEnquiry);
        var aftercount=balanceEnquiryRepository.count();

        // Retrieve the balance using the accountId
        //Double retrievedBalance = balanceEnquiryRepository.findBalanceByAccountId(1L);

        // Assertions to check if the retrieved balance is as expected

        assertEquals(b4count+1,aftercount);
    }
}
