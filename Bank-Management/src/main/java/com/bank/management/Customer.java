package com.bank.management;
import lombok.*;

@Getter
@Setter
public class Customer {


    private Long id;

    private String firstName;

    private String lastName;

    private String address;

    private String zipCode;
}