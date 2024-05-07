package com.bank.management.User;


import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String getUserGreeting(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            log.info("User found: {}", username);
            return "Hi, " + user.getUsername();
        } else {
            log.warn("User not found: {}", username);
            return "User not found";
        }
    }
}
