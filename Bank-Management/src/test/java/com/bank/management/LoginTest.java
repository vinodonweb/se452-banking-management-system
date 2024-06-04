package com.bank.management;

import com.bank.management.login.Login;
import com.bank.management.login.LoginFailedException;
import com.bank.management.login.LoginService;
import com.bank.management.signup.Signup;
import com.bank.management.signup.SignupRepository;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class LoginTest {

    @Mock
    private SignupRepository signupRepository;

    @InjectMocks
    private LoginService loginService;

    @Test
    public void testAuthenticate_WithValidLogin_ReturnsTrue() {
        // Arrange
        Login login = new Login();
        login.setUsername("testUser");
        login.setPassword("testPassword");

        Signup storedSignup = new Signup();
        storedSignup.setUsername("testUser");
        storedSignup.setPassword("testPassword");

        when(signupRepository.findByUsername("testUser")).thenReturn(storedSignup);

        // Act
        boolean result = loginService.authenticate(login);

        // Assert
        assertTrue(result);
    }

    @Test
    public void testAuthenticate_WithInvalidLogin_ReturnsFalse() {
        // Arrange
        Login login = new Login();
        login.setUsername("testUser");
        login.setPassword("wrongPassword");

        Signup storedSignup = new Signup();
        storedSignup.setUsername("testUser");
        storedSignup.setPassword("testPassword");

        when(signupRepository.findByUsername("testUser")).thenReturn(storedSignup);

        // Act & Assert
        try {
            loginService.authenticate(login);
            assertFalse(true, "Expected LoginFailedException to be thrown");
        } catch (LoginFailedException e) {
            assertTrue(true);
        }
    }

    @Test
    public void testAuthenticate_WithNonExistentUser_ReturnsFalse() {
        // Arrange
        Login login = new Login();
        login.setUsername("nonExistentUser");
        login.setPassword("somePassword");

        when(signupRepository.findByUsername("nonExistentUser")).thenReturn(null);

        // Act & Assert
        try {
            loginService.authenticate(login);
            assertFalse(true, "Expected LoginFailedException to be thrown");
        } catch (LoginFailedException e) {
            assertTrue(true);
        }
    }
}
