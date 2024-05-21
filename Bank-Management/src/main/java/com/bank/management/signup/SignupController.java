package com.bank.management.signup;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/signup")
@Log4j2
public class SignupController {
    @Autowired
    private SignupService signupService;

    @PostMapping("/register")
    public boolean register(@RequestBody Signup signup) {
        return signupService.register(signup);
    }

    // Other signup-related endpoints can be added here
}
