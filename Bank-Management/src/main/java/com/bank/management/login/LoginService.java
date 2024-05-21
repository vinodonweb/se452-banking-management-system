package com.bank.management.login;

import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Log4j2
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public boolean authenticate(Login login) {
        log.traceEntry("Enter authenticate", login.getUsername());
        Login storedLogin = loginRepository.findByUsername(login.getUsername());
        if (storedLogin != null && storedLogin.getPassword().equals(login.getPassword())) {
            log.traceExit("Exit authenticate", true);
            return true;
        }
        log.traceExit("Exit authenticate", false);
        return false;
    }

    // Other login-related methods can be added here later on if needed.
}
