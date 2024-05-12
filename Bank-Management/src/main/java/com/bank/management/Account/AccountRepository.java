package com.bank.management.Account;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface AccountRepository extends JpaRepository<Account,Long> {

    @Transactional
    @Modifying
    @Query("UPDATE Account a SET a.balance = :newBalance WHERE a.id = :accountId")
    void updateBalanceByAccountId(@Param("accountId") Long accountId, @Param("newBalance") double newBalance);
    Account findAccountByAccountNumber(String accountNumber);

    @Query("select a.balance from Account a where a.accountNumber=:accountNumber")
    Double findBalanceByAccountNumber(String accountNumber);
    Boolean existsByAccountNumber(String accountNumber);
}
