package com.bank.management.feedback;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.management.ResponseAPI;

import java.util.List;

@RestController
@RequestMapping("/api/airports")
@Log4j2
@CrossOrigin(origins = "http://localhost:4200/")
public class FeedbackController {
    @Autowired
    private FeedbackService service;

    @GetMapping
    public List<Feedback> list() {
        return service.list();
    }
 
    @PostMapping
    public ResponseAPI<Feedback> feedback(@RequestBody Feedback f) {
        log.traceEntry("enter feeback", f);

        //Checking if account exists
        Feedback f1=service.save(f);
        // double oldBalance=accountService.getBalanceByAccountNumber(d.getAccountNumber());
        // accountService.updateAccount(d.getAccountNumber(),oldBalance+d.getAmount());

        ResponseAPI<Feedback> response = new ResponseAPI<Feedback>(HttpStatus.OK, "Deposit Succesful", f1);
        log.traceExit("exit deposit", f);
        return response;
    }


    @DeleteMapping
    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        service.delete(n);
        log.traceExit("Exit delete");
    }
}
