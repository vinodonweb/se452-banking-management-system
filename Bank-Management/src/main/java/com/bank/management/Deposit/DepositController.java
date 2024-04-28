package com.bank.management.Deposit;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

import java.util.List;

@RestController
@RequestMapping("/api/airports")
@Log4j2
public class DepositController {
    @Autowired
    private DepositService service;

    @GetMapping
    public List<Deposit> list() {
        return service.list();
    }

    @PostMapping
    public void save(@RequestBody Deposit d) {
        log.traceEntry("enter save", d);
        service.save(d);
        log.traceExit("exit save", d);
    }


    @DeleteMapping
    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        service.delete(n);
        log.traceExit("Exit delete");
    }

}
