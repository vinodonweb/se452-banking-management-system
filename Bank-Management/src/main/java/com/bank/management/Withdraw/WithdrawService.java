package com.bank.management.Withdraw;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/withdraw")
@Log4j2
public class WithdrawService {

    @Autowired
    private WithdrawRepository repo;

    public List<Withdraw> list() {
        log.traceEntry("Enter list");
        var retval = repo.findAll();
        log.traceExit("Exit list", retval);
        return repo.findAll();
    }

    public void save(Withdraw w) {
        log.traceEntry("enter save", w);
        repo.save(w);
        log.traceExit("exit save", w);
    }


    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        repo.deleteById(n);
        log.traceExit("Exit delete");
    }
}