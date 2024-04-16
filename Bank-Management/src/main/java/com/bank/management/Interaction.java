package com.bank.management;
import lombok.*;

import java.util.Date;


public class Interaction {

    private Long id;


    private Customer customer;

    private String interactionType;

    private String description;

    private Date interactionDate;


}