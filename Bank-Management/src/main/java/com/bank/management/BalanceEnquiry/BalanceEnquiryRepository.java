package com.bank.management.balanceenquiry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for accessing account balance data.
 */
@Repository
public interface BalanceEnquiryRepository extends JpaRepository<BalanceEnquiry, Long> {
    /**
     * Finds the balance by account number.
     *
     * @param accountNumber the account number
     * @return the balance for the account
     */
    @Query("SELECT be.balance FROM BalanceEnquiry be WHERE be.accountNumber = :accountNumber")
    Double findBalanceByAccountNumber(@Param("accountNumber") String accountNumber);
}
