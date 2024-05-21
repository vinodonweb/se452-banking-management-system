package com.bank.management.signup;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;

public class AccountTypeDeserializer extends JsonDeserializer<Signup.AccountType> {

    @Override
    public Signup.AccountType deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        String value = p.getText().toUpperCase();
        return Signup.AccountType.valueOf(value);
    }

}
