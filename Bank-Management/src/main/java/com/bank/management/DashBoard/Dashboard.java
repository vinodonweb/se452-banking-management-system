package com.bank.management.DashBoard;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Dashboard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Double totalBalance;
  private Integer numberOfTransactions;
  private Double totalDeposits;
  private Integer numberOfWithdrawals;

  // Getters and Setters
  public Double getTotalBalance() {
      return totalBalance;
  }

  public void setTotalBalance(Double totalBalance) {
      this.totalBalance = totalBalance;
  }

  public Integer getNumberOfTransactions() {
      return numberOfTransactions;
  }

  public void setNumberOfTransactions(Integer numberOfTransactions) {
      this.numberOfTransactions = numberOfTransactions;
  }

  public Double getTotalDeposits() {
      return totalDeposits;
  }

  public void setTotalDeposits(Double totalDeposits) {
      this.totalDeposits = totalDeposits;
  }

  public Integer getNumberOfWithdrawals() {
      return numberOfWithdrawals;
  }

  public void setNumberOfWithdrawals(Integer numberOfWithdrawals) {
      this.numberOfWithdrawals = numberOfWithdrawals;
  }
}
