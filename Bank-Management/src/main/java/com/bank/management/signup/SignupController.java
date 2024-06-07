package com.bank.management.signup;

import com.bank.management.ResponseAPI;
import com.bank.management.withdraw.Withdraw;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/signup")
@Log4j2
public class SignupController {
    @Autowired
    private SignupService signupService;

    @PostMapping
    public ResponseAPI<Signup> register(@RequestBody Signup signup) {
        try {
            signupService.register(signup);
            return new ResponseAPI<>(HttpStatus.OK, "User created successfully", null);
        } catch (UsernameAlreadyExistsException e) {
            return new ResponseAPI<>(HttpStatus.BAD_REQUEST, e.getMessage(), null);
        } catch (EmailAlreadyExistsException e) {
            return new ResponseAPI<>(HttpStatus.BAD_REQUEST, e.getMessage(), null);
        } catch (Exception e) {
            log.error("Unexpected error during user registration", e);
            return new ResponseAPI<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error creating user", null);
        }
    }

    // Other signup-related endpoints can be added here
}
