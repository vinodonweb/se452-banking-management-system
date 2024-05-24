package com.bank.management.transactionHistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for accessing transaction history data.
 */
@Repository
public interface TransactionHistoryRepository extends JpaRepository<com.bank.management.transactionhistory.TransactionHistory, Long> {

    List<com.bank.management.transactionhistory.TransactionHistory> findByAccountNumber(String accountNumber);
}
