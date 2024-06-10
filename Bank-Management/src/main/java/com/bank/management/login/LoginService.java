package com.bank.management.login;

import com.bank.management.signup.Signup;
import com.bank.management.signup.SignupRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class LoginService {

    @Autowired
    private SignupRepository signupRepository;

    public boolean authenticate(Login login) {
        log.traceEntry("Enter authenticate", login.getUsername());
        Signup storedSignup = signupRepository.findByUsername(login.getUsername());

        if (storedSignup == null) {
            log.traceExit("User not found");
            throw new LoginFailedException("User not found: " + login.getUsername());
        }

        if (!storedSignup.getPassword().equals(login.getPassword())) {
            log.traceExit("Invalid password");
            throw new LoginFailedException("Invalid password for user: " + login.getUsername());
        }

        log.traceExit("Exit authenticate", true);
        return true;
    }
}
