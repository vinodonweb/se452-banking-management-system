package com.bank.management;


import com.bank.management.Deposit.Deposit;
import com.bank.management.Withdraw.Withdraw;
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
    public void withdrawTest()
    {
        Withdraw w=new Withdraw();
        w.setWithdrawalType("ATM");
        w.setAmount(1200);
        var b4count=withdrawRepo.count();
        withdrawRepo.save(w);
        var afterCount=withdrawRepo.count();
        assertEquals(b4count+1,afterCount);


    }

}
