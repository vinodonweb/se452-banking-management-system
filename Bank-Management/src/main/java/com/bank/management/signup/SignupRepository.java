package com.bank.management.signup;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SignupRepository extends MongoRepository<Signup, String> {
    Signup findByUsername(String username);
    Signup findByEmail(String email);
}