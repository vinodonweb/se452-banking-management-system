package com.bank.management;

import com.bank.management.DashBoard.Dashboard;
import com.bank.management.DashBoard.DashboardRepository;
import com.bank.management.DashBoard.DashboardService;
import com.bank.management.TransactionHistory.TransactionHistoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;


import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class DashboardTest {


    @Autowired
    private DashboardRepository dashboardRepo;

    @Mock
    private BalanceEnquiryService balanceEnquiryService;

    @Mock
    private TransactionHistoryService transactionService;

    @Mock
    private DepositService depositService;

    @InjectMocks
    private DashboardService dashboardService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetDashboardData() {
        Dashboard d = new Dashboard();
        d.setTotalBalance(2000.0);
        d.setNumberOfTransactions(20);
        assertEquals(20, d.getNumberOfTransactions());
        assertEquals(2000.0, d.getTotalBalance());


    }
}
