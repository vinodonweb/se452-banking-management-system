package com.bank.management.balanceEnquiry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BalanceEnquiryRepository extends JpaRepository<BalanceEnquiry, Long> {

    @Query("SELECT be.balanceAmount FROM BalanceEnquiry be WHERE be.accountNumber = :accountNumber")
    Double findBalanceByAccountNumber(@Param("accountNumber") String accountNumber);
}
