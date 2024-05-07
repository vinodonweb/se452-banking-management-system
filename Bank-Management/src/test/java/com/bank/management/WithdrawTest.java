package com.bank.management;


import com.bank.management.Deposit.Deposit;
import com.bank.management.Withdraw.WithdrawRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
public class WithdrawTest {

    @Autowired
    private WithdrawRepository withdrawRepo;

    @DisplayName("Withdraw test")
    @Test
    public void depositTest()
    {
        Deposit dep = new Deposit();
        dep.setTransactionNumber(123);
        dep.setSourceAccountNumber("src");
        dep.setDestinationAccountNumber("dest");
        dep.setAmount(1200);
        String expectedWithError = "Pat Sajak";
        String expectedNoError = "Deposit(depositId=null, transactionNumber=123, sourceAccountNumber=src, destinationAccountNumber=dest, amount=1200.0, depositDate=null, notes=null)";
        assertEquals(expectedNoError, dep.toString());
    }

}
