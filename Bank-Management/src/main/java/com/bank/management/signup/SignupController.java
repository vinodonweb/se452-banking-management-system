package com.bank.management.signup;

import com.bank.management.*;
import lombok.extern.log4j.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/signup", method = {RequestMethod.POST, RequestMethod.GET})
@Log4j2
public class SignupController {
    @Autowired
    private SignupService signupService;

    @PostMapping("/register")
    public ResponseAPI<Signup> register(@RequestBody Signup signup) {
        log.info("Received signup request: {}", signup);
        try {
            signupService.register(signup);
            return new ResponseAPI<>(HttpStatus.OK, "User created successfully", signup);
        } catch (UsernameAlreadyExistsException e) {
            log.warn("Username already exists: {}", signup.getUsername());
            return new ResponseAPI<>(HttpStatus.BAD_REQUEST, e.getMessage(), null);
        } catch (EmailAlreadyExistsException e) {
            log.warn("Email already exists: {}", signup.getEmail());
            return new ResponseAPI<>(HttpStatus.BAD_REQUEST, e.getMessage(), null);
        } catch (Exception e) {
            log.error("Unexpected error during user registration", e);
            return new ResponseAPI<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error creating user", null);
        }
    }

    @RequestMapping("/test")
    public String test() {
        return "Testing message";
    }

    // Other signup-related endpoints can be added here
}
