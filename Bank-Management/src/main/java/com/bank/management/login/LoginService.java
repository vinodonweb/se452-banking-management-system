package com.bank.management.login;

import com.bank.management.signup.*;
import lombok.extern.log4j.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.security.crypto.password.*;
import org.springframework.stereotype.*;

@Service
@Log4j2
public class LoginService {

    @Autowired
    private SignupRepository signupRepository;


    //password match
    @Autowired
    private PasswordEncoder passwordEncoder;


    public Signup authenticate(Login login) {
        log.traceEntry("Enter authenticate", login.getUsername());
        Signup storedSignup = signupRepository.findByUsername(login.getUsername());

        if (storedSignup == null) {
            log.traceExit("User not found");
            throw new LoginFailedException("User not found: " + login.getUsername());
        }

        if (!passwordEncoder.matches(login.getPassword(), storedSignup.getPassword())) {
            log.traceExit("Invalid password");
            throw new LoginFailedException("Invalid password for user: " + login.getUsername());
        }

        log.traceExit("Exit authenticate", storedSignup);
        return storedSignup;
    }
}
