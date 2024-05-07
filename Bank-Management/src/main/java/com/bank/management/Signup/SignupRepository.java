package com.bank.management.Signup;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SignupRepository extends JpaRepository<Signup, Long> {
    Signup findByUsername(String username);
}