package com.bank.management.Login;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Long> {
    Login findByUsername(String username);

}