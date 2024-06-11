package com.bank.management.deposit;

import com.bank.management.account.AccountService;
import com.bank.management.ResponseAPI;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deposit")
@Log4j2
@CrossOrigin(origins = "*") // Allow all origins
public class DepositController {
    @Autowired
    private DepositService service;

    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<Deposit> list() {
        return service.list();
    }

    @PostMapping
    public ResponseAPI<Deposit> deposit(@RequestBody Deposit d) {
        log.traceEntry("enter deposit", d);

        //Checking if account exists
        boolean accountExists = accountService.existsByAccountNumber(d.getAccountNumber());
        if (!accountExists) {
            ResponseAPI<Deposit> response = new ResponseAPI<>(HttpStatus.BAD_REQUEST,
                    "Invalid account number, account does not exist", null);
            log.traceExit("exit deposit", d);
            return response;
        }
        Deposit d1=service.save(d);
        double oldBalance=accountService.getBalanceByAccountNumber(d.getAccountNumber());
        accountService.updateAccount(d.getAccountNumber(),oldBalance+d.getAmount());

        ResponseAPI<Deposit> response = new ResponseAPI<Deposit>(HttpStatus.OK, "Deposit Succesful", d1);
        log.traceExit("exit deposit", d);
        return response;
    }


    @DeleteMapping
    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        service.delete(n);
        log.traceExit("Exit delete");
    }

}
