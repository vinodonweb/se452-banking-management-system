package com.bank.management.account;

import com.bank.management.ResponseAPI;
import lombok.Data;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@Log4j2
@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "*") // Allow all origins
public class AccountController {

    @Autowired
    AccountService service;

    @PostMapping
    public ResponseAPI<Account> createAccount(@RequestBody Account a) {
        ResponseAPI<Account> response=null;
        boolean accountExists = service.existsByAccountNumber(a.getAccountNumber());
        if (accountExists) {
             response = new ResponseAPI<>(HttpStatus.BAD_REQUEST,
                    "Uh-oh! It seems like there's already an account associated with the provided account number. Please verify your details and try again.", null);
            log.error("exit deposit");
            return response;
        }
        else {
             response = new ResponseAPI<>(HttpStatus.CREATED, "Account created", service.save(a));

        }
        log.traceExit("exit deposit", a);
        return response;
    }

    @GetMapping
    public List<Account> showAccount()
    {
        return service.list();
    }
}
