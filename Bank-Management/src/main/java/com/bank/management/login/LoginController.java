package com.bank.management.login;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
@Log4j2
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/authenticate")
    public boolean authenticate(@RequestBody Login login) {
        return loginService.authenticate(login);
    }

    // Other login-related endpoints can be added here
    //implement duo JWT auth
}