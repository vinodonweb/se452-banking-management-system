package com.bank.management;
import lombok.*;
import java.util.Date;


@Getter
@Setter
public class LoanManagement {

    private String loanId;
    private String customerId;
    private double loanAmount;
    private double interestRate;
    private int tenureMonths;
    private Date startDate;
    private Date endDate;
    private boolean isActive;
    private String loanType;
    private String collateralType;
    private double collateralValue;
    private boolean isApproved;
    private String approvalAuthority;
    private Date approvalDate;


}