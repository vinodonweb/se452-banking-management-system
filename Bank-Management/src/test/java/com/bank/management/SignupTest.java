package com.bank.management;

import com.bank.management.signup.Signup;
import com.bank.management.signup.SignupRepository;
import com.bank.management.signup.SignupService;
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

    @Test
    public void testRegister_WithDifferentCaseAccountType_ReturnsTrue() {
        // Arrange
        Signup signupLowerCase = new Signup();
        signupLowerCase.setUsername("lowercaseUser");
        signupLowerCase.setPassword("password");
        signupLowerCase.setAccountType(Signup.AccountType.valueOf("savings".toUpperCase()));

        Signup signupUpperCase = new Signup();
        signupUpperCase.setUsername("uppercaseUser");
        signupUpperCase.setPassword("password");
        signupUpperCase.setAccountType(Signup.AccountType.valueOf("SAVINGS".toUpperCase()));

        when(signupRepository.findByUsername("lowercaseUser")).thenReturn(null);
        when(signupRepository.findByUsername("uppercaseUser")).thenReturn(null);

        // Act
        boolean resultLowerCase = signupService.register(signupLowerCase);
        boolean resultUpperCase = signupService.register(signupUpperCase);

        // Assert
        assertTrue(resultLowerCase);
        assertTrue(resultUpperCase);
    }

    @Test
    public void testRegister_WithInvalidAccountType_ThrowsException() {
        // Arrange
        Signup signup = new Signup();
        signup.setUsername("invalidAccountTypeUser");
        signup.setPassword("password");

        Exception exception = null;
        try {
            signup.setAccountType(Signup.AccountType.valueOf("INVALID"));
        } catch (IllegalArgumentException e) {
            exception = e;
        }

        // Assert
        assertTrue(exception instanceof IllegalArgumentException);
    }
}
