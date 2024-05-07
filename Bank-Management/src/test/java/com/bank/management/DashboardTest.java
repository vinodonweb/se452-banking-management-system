package com.bank.management;
import com.bank.management.DashBoard.Dashboard;
import com.bank.management.DashBoard.DashboardService;
import com.bank.management.TransactionHistory.TransactionHistoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class DashboardTest {
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
        when(balanceEnquiryService.getBalance(anyLong())).thenReturn(1000.00);
        when(transactionService.countTransactionsByAccountId(anyLong())).thenReturn(10);
        when(depositService.sumDepositsByAccountId(anyLong())).thenReturn(500.00);
        when(transactionService.countWithdrawalsByAccountId(anyLong())).thenReturn(5);

        Dashboard result = dashboardService.getDashboardData(1L);

        assertNotNull(result);
        assertEquals(1000.00, result.getTotalBalance());
        assertEquals(10, result.getNumberOfTransactions());
        assertEquals(500.00, result.getTotalDeposits());
        assertEquals(5, result.getNumberOfWithdrawals());

        verify(balanceEnquiryService).getBalance(1L);
        verify(transactionService).countTransactionsByAccountId(1L);
        verify(depositService).sumDepositsByAccountId(1L);
        verify(transactionService).countWithdrawalsByAccountId(1L);
    }
}
