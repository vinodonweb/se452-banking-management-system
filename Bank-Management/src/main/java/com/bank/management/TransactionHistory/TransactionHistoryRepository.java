package com.bank.management.TransactionHistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionHistoryRepository extends JpaRepository<TransactionHistory, Long> {
    // Custom query method to find transaction histories by account ID
    List<TransactionHistory> findByAccountId(Long accountId);
}
