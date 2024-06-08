package com.bank.management.dashBoard;

import com.bank.management.balanceEnquiry.*;
import com.bank.management.deposit.*;
import com.bank.management.transactionHistory.*;
import com.bank.management.withdraw.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;


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
