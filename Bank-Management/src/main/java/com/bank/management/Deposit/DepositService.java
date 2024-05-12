package com.bank.management.Deposit;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
}