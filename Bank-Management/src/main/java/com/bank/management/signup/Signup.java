package com.bank.management.signup;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "signup")
@AllArgsConstructor
@NoArgsConstructor
public class Signup {
    @Id
    private String signupId;

    private String username;
    private String password;
    private String email;

    @CreatedDate
    private LocalDateTime creationDate;

    @JsonDeserialize(using = AccountTypeDeserializer.class)
    private AccountType accountType;

    public enum AccountType {
        SAVINGS,
        CHECKING,
    }

    // Other signup attributes can be added here
}
