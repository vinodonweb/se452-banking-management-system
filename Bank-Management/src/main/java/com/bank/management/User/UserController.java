package com.bank.management.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

//    @GetMapping("/greeting")
//    public String getUserGreeting() {
//        // Retrieve username in a real scenario through security context or session
//        String username = "User";
//        return userService.getUserGreeting(username);
//    }
}

