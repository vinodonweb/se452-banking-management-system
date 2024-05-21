package com.bank.management.deposit;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
@AllArgsConstructor
public class DepositService {

    @Autowired
    private DepositRepository repo;

    public List<Deposit> list() {
        log.traceEntry("Enter list");
        var retval = repo.findAll();
        log.traceExit("Exit list", retval);
        return repo.findAll();
    }

    public Deposit save(Deposit d) {
        log.traceEntry("enter save", d);
        log.traceExit("exit save", d);
        return repo.save(d);

    }


    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        repo.deleteById(n);
        log.traceExit("Exit delete");
    }



        public Double sumDepositsByAccountId(Long accountId) {
            return 5000.0;
        }
    }


