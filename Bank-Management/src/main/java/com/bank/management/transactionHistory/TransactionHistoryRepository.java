package com.bank.management.transactionHistory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionHistoryRepository extends JpaRepository<TransactionHistory, Long> {

    @Query("SELECT th FROM TransactionHistory th WHERE th.accountNumber = :accountNumber")
    List<TransactionHistory> findTransactionsByAccountNumber(@Param("accountNumber") String accountNumber);
}
