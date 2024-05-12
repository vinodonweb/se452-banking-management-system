package com.bank.management;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Data
public class ResponseAPI<T> {
    private HttpStatus status;
    private String message;
    private T data;

}
