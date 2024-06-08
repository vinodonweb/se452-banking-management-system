package com.bank.management.withdraw;

import com.bank.management.transactionHistory.TransactionHistory;
import com.bank.management.transactionHistory.TransactionHistoryRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@Log4j2
public class WithdrawService {

    @Autowired
    private WithdrawRepository repo;

    @Autowired
    private TransactionHistoryRepository transactionRepo;
    public List<Withdraw> list() {
        log.traceEntry("Enter list");
        var retval = repo.findAll();
        log.traceExit("Exit list", retval);
        return repo.findAll();
    }

    public Withdraw save(Withdraw w) {
        log.traceEntry("enter save", w);
        log.traceExit("exit save", w);
        //TransactionHistory th = new TransactionHistory(w.getWithdrawId(),w.getTransactionNumber(), w.getAccountNumber(), w.getAmount(), "Withdraw", LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        //transactionRepo.save(th);
        return repo.save(w);

    }


    public void delete(Long n) {
        log.traceEntry("Enter delete", n);
        repo.deleteById(n);
        log.traceExit("Exit delete");
    }

        public static Integer countWithdrawalsByAccountId(Long accountId) {
            return 5;
        }

}
