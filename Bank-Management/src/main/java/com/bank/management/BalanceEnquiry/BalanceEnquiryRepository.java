package com.bank.management.BalanceEnquiry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BalanceEnquiryRepository extends JpaRepository<BalanceEnquiry, Long> {
    Double findBalanceByAccountId(Long accountId);
}
