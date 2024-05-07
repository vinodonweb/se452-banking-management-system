package com.bank.management;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import com.bank.management.User.User;
import com.bank.management.User.UserRepository;
import com.bank.management.User.UserService;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetUserGreetingReturnsExpectedGreeting() {
        String expectedUsername = "User";
        User mockUser = new User(1L, expectedUsername, "User Fullname", "user@example.com");
        when(userRepository.findByUsername(expectedUsername)).thenReturn(mockUser);

        String greeting = userService.getUserGreeting(expectedUsername);

        assertEquals("Hi, " + expectedUsername, greeting);
        verify(userRepository).findByUsername(expectedUsername);
    }

    @Test
    void testGetUserGreetingReturnsUserNotFound() {
        
        when(userRepository.findByUsername("Unknown")).thenReturn(null);

        
        String response = userService.getUserGreeting("Unknown");

        
        assertEquals("User not found", response);
        verify(userRepository).findByUsername("Unknown");
    }
}
