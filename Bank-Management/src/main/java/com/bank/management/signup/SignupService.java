package com.bank.management.signup;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class SignupService {

    @Autowired
    private SignupRepository signupRepository;

    public boolean register(Signup signup) {
        log.traceEntry("Enter register", signup.getUsername());
        if (signupRepository.findByUsername(signup.getUsername()) == null) {
            signupRepository.save(signup);
            log.traceExit("Exit register", true);
            return true;
        }
        log.traceExit("Exit register", false);
        return false;
    }

    // Other signup-related methods can be added here
}
