package com.bank.management.login;

import com.bank.management.ResponseAPI;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
@Log4j2
@CrossOrigin(origins = "http://localhost:4200/")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseAPI<String> authenticate(@RequestBody Login login) {
        try {
            loginService.authenticate(login);
            return new ResponseAPI<>(HttpStatus.OK, "Login successful", null);
        } catch (LoginFailedException e) {
            return new ResponseAPI<>(HttpStatus.UNAUTHORIZED, e.getMessage(), null);
        } catch (Exception e) {
            log.error("Unexpected error during user authentication", e);
            return new ResponseAPI<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error during login", null);
        }
    }

    // Other login-related endpoints can be added here
}
