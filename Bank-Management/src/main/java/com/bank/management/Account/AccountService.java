package com.bank.management.Account;

import com.bank.management.Deposit.Deposit;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
@AllArgsConstructor
public class AccountService {

    @Autowired
    AccountRepository repo;

    public List<Account> list() {
        log.traceEntry("Enter Account list");
        var retval = repo.findAll();
        log.traceExit("Exit list", retval);
        return repo.findAll();
    }

    public Account save(Account a) {
        log.traceEntry("enter Account save", a);
        log.traceExit("exit save", a);
        return repo.save(a);

    }

    public void delete(Long n) {
        log.traceEntry("Enter Account delete", n);
        repo.deleteById(n);
        log.traceExit("Exit delete");
    }


    public void updateAccount(String accountNumber, double newBalance) {
        log.traceEntry("Enter Amount update");
        Account a = repo.findAccountByAccountNumber(accountNumber);
        repo.updateBalanceByAccountId(a.getAccountId(), newBalance);
    }

    public double getBalanceByAccountNumber(String accountNumber) {
        return repo.findBalanceByAccountNumber(accountNumber);
    }

    public boolean existsByAccountNumber(String accountNumber) {
        return repo.existsByAccountNumber(accountNumber);
    }
}
