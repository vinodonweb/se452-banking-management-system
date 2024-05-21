package com.bank.management.Account;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="account_id")
    private Long accountId;

    @Column(name="account_number",unique = true)
    private String accountNumber;

    @Column(name="account_type")
    private String accountType;

    @Column(name="balance")
    private double balance;

    //@Column(name="owner")
   // private Customer owner;

    @Column(name="creation_date")
    private LocalDateTime creationDate;


}