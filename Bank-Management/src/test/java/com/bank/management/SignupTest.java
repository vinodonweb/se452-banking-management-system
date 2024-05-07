package com.bank.management;

import com.bank.management.Signup.Signup;
import com.bank.management.Signup.SignupRepository;
import com.bank.management.Signup.SignupService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class SignupTest {

    @Mock
    private SignupRepository signupRepository;

    @InjectMocks
    private SignupService signupService;

    @Test
    public void testRegister_WithNewUsername_ReturnsTrue() {
        // Arrange
        Signup signup = new Signup();
        signup.setUsername("newUser");
        signup.setPassword("password");
        signup.setAccountType(Signup.AccountType.SAVINGS);

        when(signupRepository.findByUsername("newUser")).thenReturn(null);

        // Act
        boolean result = signupService.register(signup);

        // Assert
        assertTrue(result);
    }

    @Test
    public void testRegister_WithExistingUsername_ReturnsFalse() {
        // Arrange
        Signup existingSignup = new Signup();
        existingSignup.setUsername("existingUser");
        existingSignup.setPassword("password");
        existingSignup.setAccountType(Signup.AccountType.SAVINGS);

        Signup newSignup = new Signup();
        newSignup.setUsername("existingUser");
        newSignup.setPassword("newPassword");
        newSignup.setAccountType(Signup.AccountType.CHECKING);

        when(signupRepository.findByUsername("existingUser")).thenReturn(existingSignup);

        // Act
        boolean result = signupService.register(newSignup);

        // Assert
        assertFalse(result);
    }
}
