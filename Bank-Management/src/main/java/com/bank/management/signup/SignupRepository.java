package com.bank.management.signup;

import org.springframework.data.jpa.repository.*;

public interface SignupRepository extends JpaRepository<Signup, Long> {
    Signup findByUsername(String username);
    Signup findByEmail(String email);
}