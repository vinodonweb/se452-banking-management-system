package com.bank.management;

import com.bank.management.login.*;
import com.bank.management.security.*;
import com.bank.management.signup.*;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.*;
import org.mockito.*;
import org.mockito.junit.jupiter.*;
import org.springframework.http.*;
import org.springframework.security.authentication.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class LoginTest {

    @InjectMocks
    private LoginController loginController;

    @Mock
    private LoginService loginService;

    @Mock
    private AuthenticationManager manager;

    @Mock
    private JwtHelper helper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testAuthenticate_Success() {
        Login login = new Login("username", "password");
        Signup user = new Signup();
        user.setUsername("username");
        user.setPassword("password");
        when(loginService.authenticate(login)).thenReturn(user);
        when(helper.generateToken("username")).thenReturn("token");

        ResponseEntity<ResponseAPI<JWTResponse>> responseEntity = loginController.authenticate(login);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Login successful", responseEntity.getBody().getMessage());
        assertEquals("token", responseEntity.getBody().getData().getJwtToken());
        assertEquals("username", responseEntity.getBody().getData().getUsername());
    }

    @Test
    public void testAuthenticate_UserNotFound() {
        Login login = new Login("nonExistingUsername", "password");
        when(loginService.authenticate(login)).thenThrow(new LoginFailedException("User not found: " + login.getUsername()));

        ResponseEntity<ResponseAPI<JWTResponse>> responseEntity = loginController.authenticate(login);

        assertEquals(HttpStatus.UNAUTHORIZED, responseEntity.getStatusCode());
        assertEquals("User not found: nonExistingUsername", responseEntity.getBody().getMessage());
        assertEquals(null, responseEntity.getBody().getData());
    }

    @Test
    public void testAuthenticate_InvalidPassword() {
        Login login = new Login("existingUsername", "wrongPassword");
        when(loginService.authenticate(login)).thenThrow(new LoginFailedException("Invalid password for user: " + login.getUsername()));

        ResponseEntity<ResponseAPI<JWTResponse>> responseEntity = loginController.authenticate(login);

        assertEquals(HttpStatus.UNAUTHORIZED, responseEntity.getStatusCode());
        assertEquals("Invalid password for user: existingUsername", responseEntity.getBody().getMessage());
        assertEquals(null, responseEntity.getBody().getData());
    }

    @Test
    public void testAuthenticate_InternalServerError() {
        Login login = new Login("existingUsername", "password");
        when(loginService.authenticate(login)).thenThrow(new RuntimeException("Some internal error"));

        ResponseEntity<ResponseAPI<JWTResponse>> responseEntity = loginController.authenticate(login);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals("Error during login", responseEntity.getBody().getMessage());
        assertEquals(null, responseEntity.getBody().getData());
    }
}
