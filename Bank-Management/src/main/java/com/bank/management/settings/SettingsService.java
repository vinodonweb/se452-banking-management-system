package com.bank.management.settings;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.management.withdraw.Withdraw;
import com.bank.management.withdraw.WithdrawRepository;

import java.util.List;

@RestController
@RequestMapping("/api/settings")
@Log4j2
public class SettingsService {
    
    @Autowired
    private SettingsRepository repo;

    public List<Settings> list() {
        log.traceEntry("Enter list");
        var retval = repo.findAll();
        log.traceExit("Exit list", retval);
        return repo.findAll();
    }

    public void save(Settings s) {
        log.traceEntry("enter save", s);
        repo.save(s);
        log.traceExit("exit save", s);
    }


    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        repo.deleteById(n);
        log.traceExit("Exit delete");
    }
}
