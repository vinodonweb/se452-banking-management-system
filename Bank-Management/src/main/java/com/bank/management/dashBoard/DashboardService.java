package com.bank.management.dashBoard;

import com.bank.management.account.Account;
import com.bank.management.balanceEnquiry.BalanceEnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bank.management.deposit.DepositService;
import com.bank.management.transactionHistory.TransactionHistoryService;
import com.bank.management.withdraw.WithdrawService;

import java.util.List;


@Service
public class DashboardService {

    @Autowired
    private BalanceEnquiryService balanceEnquiryService;

    @Autowired
    private TransactionHistoryService transactionService;

    @Autowired
    private DepositService depositService;

    @Autowired
    private DashboardRepository repo;

    public Dashboard getDashboardData(Long accountId) {
        Dashboard data = new Dashboard();
       // data.setTotalBalance(balanceEnquiryService.getBalance(accountId));
        //data.setNumberOfTransactions(transactionService.getTransactionHistory(accountId));
        data.setTotalDeposits(depositService.sumDepositsByAccountId(accountId));
        data.setNumberOfWithdrawals(WithdrawService.countWithdrawalsByAccountId(accountId));

        return data;
    }

    public List<Dashboard> getDashboard() {

        var retval = repo.findAll();
        return retval;
    }

}
