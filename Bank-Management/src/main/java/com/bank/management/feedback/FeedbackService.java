package com.bank.management.feedback;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
@AllArgsConstructor
public class FeedbackService {
    
    @Autowired
    private FeedbackRepository repo;

    public List<Feedback> list() {
        log.traceEntry("Enter list");
        var retval = repo.findAll();
        log.traceExit("Exit list", retval);
        return repo.findAll();
    }
    
    public Feedback save(Feedback f) {
        log.traceEntry("enter save", f);
        repo.save(f);
        log.traceExit("exit save", f);
        return repo.save(f);
    }


    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        repo.deleteById(n);
        log.traceExit("Exit delete");
    }
}
