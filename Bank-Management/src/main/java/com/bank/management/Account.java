package com.bank.management;
import lombok.*;

@Getter
@Setter
public class Account {


    private Long id;

    private String accountNumber;

    private String accountType;

    private double balance;

    private Customer owner;


}