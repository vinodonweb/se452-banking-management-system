package com.bank.management;
import java.util.Date;
import lombok.*;

@Getter
@Setter
public class FeedbackForm {

    private String feedbackId;
    private String customerId;
    private Customer customer;
    private String feedbackType;
    private String feedbackMessage;
    private Date feedbackDate;
    private boolean isResolved;


}
