package com.bank.management.settings;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.management.deposit.Deposit;
import com.bank.management.deposit.DepositService;

import java.util.List;

@RestController
@RequestMapping("/api/airports")
@Log4j2
public class SettingsController {
    @Autowired
    private SettingsService service;

    @GetMapping
    public List<Settings> list() {
        return service.list();
    }

    @PostMapping
    public void save(@RequestBody Settings s) {
        log.traceEntry("enter save", s);
        service.save(s);
        log.traceExit("exit save", s);
    }


    @DeleteMapping
    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        service.delete(n);
        log.traceExit("Exit delete");
    }
}
