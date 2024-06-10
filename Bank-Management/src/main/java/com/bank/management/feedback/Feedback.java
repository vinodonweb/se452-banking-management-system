package com.bank.management.feedback;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Column(name = "customer_name")
    private int customerName;

    @Column(name = "customer_email")
    private String customerEmail;

    @Column(name = "phone_number")
    private double phoneNumber;

    @Column(name = "explanation")
    private String explanation;
}
