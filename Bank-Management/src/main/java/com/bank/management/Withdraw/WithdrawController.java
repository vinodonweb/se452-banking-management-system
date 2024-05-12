package com.bank.management.Withdraw;

import com.bank.management.Account.Account;
import com.bank.management.Account.AccountService;
import com.bank.management.Deposit.Deposit;
import com.bank.management.ResponseAPI;
import lombok.With;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;

import java.util.List;

@RestController
@RequestMapping("/api/withdraw")
@Log4j2
public class WithdrawController {
    @Autowired
    private WithdrawService service;

    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<Withdraw> list() {
        return service.list();
    }


    @DeleteMapping
    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        service.delete(n);
        log.traceExit("Exit delete");
    }

    @PostMapping
    public ResponseAPI<Withdraw> withdraw(@RequestBody Withdraw w) {
        log.traceEntry("enter withdraw", w);
        ResponseAPI<Withdraw> response = null;
        //Checking if account exists
        boolean accountExists = accountService.existsByAccountNumber(w.getAccountNumber());
        if (!accountExists) {
            response = new ResponseAPI<>(HttpStatus.BAD_REQUEST,
                    "Invalid account number, account does not exist", null);
            log.traceExit("exit deposit", w);
            return response;
        }
        double oldBalance = accountService.getBalanceByAccountNumber(w.getAccountNumber());
        if (oldBalance - w.getAmount() < 0)
            response = new ResponseAPI<Withdraw>(HttpStatus.INTERNAL_SERVER_ERROR, "Insufficient balance,please try again", null);
        else {
            Withdraw w1 = service.save(w);
            accountService.updateAccount(w.getAccountNumber(), oldBalance - w.getAmount());

            response = new ResponseAPI<Withdraw>(HttpStatus.OK, "Withdraw Succesful", w1);
        }
        log.traceExit("exit deposit", w);
        return response;
    }


}
