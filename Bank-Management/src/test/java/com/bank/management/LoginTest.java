package com.bank.management;

import com.bank.management.login.LoginRepository;
import com.bank.management.login.Login;
import com.bank.management.login.LoginService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class LoginTest {

    @Mock
    private LoginRepository loginRepository;

    @InjectMocks
    private LoginService loginService;

    @Test
    public void testAuthenticate_WithValidLogin_ReturnsTrue() {
        // Arrange
        Login login = new Login();
        login.setUsername("testUser");
        login.setPassword("testPassword");

        Login storedLogin = new Login();
        storedLogin.setUsername("testUser");
        storedLogin.setPassword("testPassword");

        when(loginRepository.findByUsername("testUser")).thenReturn(storedLogin);

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

        when(loginRepository.findByUsername("testUser")).thenReturn(null);

        // Act
        boolean result = loginService.authenticate(login);

        // Assert
        assertFalse(result);
    }
}
