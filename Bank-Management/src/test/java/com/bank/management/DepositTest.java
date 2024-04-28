package com.bank.management;

import com.bank.management.Deposit.Deposit;
import com.bank.management.Deposit.DepositRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertEquals;



@DataJpaTest
public class DepositTest {

    @Autowired
    private DepositRepository depositRepo;

    @DisplayName("Test composition in Lombok")
    @Test
    public void testDeposit() {
        Deposit d = new Deposit();
        d.setTransactionNumber(1);
        d.setSourceAccountNumber("src1");
        d.setDestinationAccountNumber("dest1");

        var b4Add = depositRepo.count();
        depositRepo.save(d);
        var afterAdd = depositRepo.count();

        assertEquals(b4Add + 1, afterAdd);



    }



//    @DisplayName("Test adding flights")
//    @Test
//    public void testAddingPassengerAsComposition() {
//        var person = new Person();
//        person.setFirstName("Pat");
//        person.setLastName("Sajak");
//        var passenger = Passenger.builder().person(person).build();
//
//        var b4Add = passengerRepo.count();
//        passengerRepo.save(passenger);
//        var afterAdd = passengerRepo.count();
//
//        assertEquals(b4Add + 1, afterAdd);
//
//        var passengerList = passengerRepo.findByPersonLastName("Sajak");
//        assertEquals(1, passengerList.size());
//    }
}



