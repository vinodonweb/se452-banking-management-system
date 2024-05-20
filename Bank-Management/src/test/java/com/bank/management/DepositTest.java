package com.bank.management;

import com.bank.management.Deposit.Deposit;
import com.bank.management.Deposit.DepositRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;



@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class DepositTest {

    @Autowired
    private DepositRepository depositRepo;

    @DisplayName("Deposit Test")
    @Test
    public void testDeposit() {
        Deposit d = new Deposit();
        d.setTransactionNumber(String.valueOf(1));
        d.setAccountNumber("src1");

        var b4Add = depositRepo.count();
        depositRepo.save(d);
        var afterAdd = depositRepo.count();

        assertEquals(b4Add + 1, afterAdd);



    }
}



