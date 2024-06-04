package com.bank.management.login;

import com.bank.management.*;
import com.bank.management.security.*;
import com.bank.management.signup.*;
import lombok.extern.log4j.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/login", method = {RequestMethod.POST, RequestMethod.GET})
@Log4j2
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private JwtHelper helper;

    @PostMapping("/authenticate")
    public ResponseEntity<ResponseAPI<JWTResponse>> authenticate(@RequestBody Login login) {
        try {
            Signup user = loginService.authenticate(login);
            String token = helper.generateToken(user.getUsername());
            return ResponseEntity.ok(new ResponseAPI<>(HttpStatus.OK, "Login successful", new JWTResponse(token, user.getUsername())));
        } catch (LoginFailedException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ResponseAPI<>(HttpStatus.UNAUTHORIZED, e.getMessage(), null));
        } catch (Exception e) {
            log.error("Unexpected error during user authentication", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ResponseAPI<>(HttpStatus.INTERNAL_SERVER_ERROR, "Error during login", null));
        }
    }


    // Other login-related endpoints can be added here
}
