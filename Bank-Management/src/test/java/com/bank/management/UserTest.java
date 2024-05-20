
package com.bank.management;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.bank.management.User.User;
import com.bank.management.User.UserRepository;
import com.bank.management.User.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


public class UserTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetUserGreeting_UserFound() {
        User user = new User(1L, "testuser", "Test User", "testuser@example.com");
        when(userRepository.findByUsername(anyString())).thenReturn(user);

        String greeting = userService.getUserGreeting("testuser");

        assertEquals("Hi, testuser", greeting);
    }

    @Test
    void testGetUserGreeting_UserNotFound() {
        when(userRepository.findByUsername(anyString())).thenReturn(null);

        String greeting = userService.getUserGreeting("unknownuser");

        assertEquals("User not found", greeting);
    }
}
