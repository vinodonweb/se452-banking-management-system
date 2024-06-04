package com.bank.management.signup;

import lombok.extern.log4j.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.security.crypto.password.*;
import org.springframework.stereotype.*;

@Service
@Log4j2
public class SignupService {

    @Autowired
    private SignupRepository signupRepository;

    // Encrypt the password
    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean register(Signup signup) {
        log.traceEntry("Enter register", signup.getUsername());

        if (signupRepository.findByUsername(signup.getUsername()) != null) {
            log.traceExit("Username already exists");
            throw new UsernameAlreadyExistsException("Username already exists: " + signup.getUsername());
        }

        if (signupRepository.findByEmail(signup.getEmail()) != null) {
            log.traceExit("Email already exists");
            throw new EmailAlreadyExistsException("Email already exists: " + signup.getEmail());
        }


        //Encrypt password before saving
        String encryptedPassword = passwordEncoder.encode(signup.getPassword());
        signup.setPassword(encryptedPassword);

        signupRepository.save(signup);
        log.info("saved user {}", signup);
        log.traceExit("Exit register", true);
        return true;
    }


    // Other signup-related methods can be added here
}
