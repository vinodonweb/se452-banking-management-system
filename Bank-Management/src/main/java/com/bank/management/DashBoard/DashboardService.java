package com.bank.management.DashBoard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bank.management.BalanceEnquiry.BalanceEnquiryService;
import com.bank.management.Deposit.DepositService;
import com.bank.management.TransactionHistory.TransactionHistoryService;
import com.bank.management.Withdraw.WithdrawService;


@Service
public class DashboardService {

    @Autowired
    private BalanceEnquiryService balanceEnquiryService;

    @Autowired
    private TransactionHistoryService transactionService;

    @Autowired
    private DepositService depositService;

    public Dashboard getDashboardData(Long accountId) {
        Dashboard data = new Dashboard();
        data.setTotalBalance(balanceEnquiryService.getBalance(accountId));
        data.setNumberOfTransactions(transactionService.getTransactionHistory(accountId));
        data.setTotalDeposits(depositService.sumDepositsByAccountId(accountId));
        data.setNumberOfWithdrawals(WithdrawService.countWithdrawalsByAccountId(accountId));

        return data;
    }
}
