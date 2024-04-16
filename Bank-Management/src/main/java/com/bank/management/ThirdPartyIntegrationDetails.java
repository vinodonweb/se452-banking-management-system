package com.bank.management;
import lombok.*;

@Getter
@Setter
public class ThirdPartyIntegrationDetails {

    private String apiKey;
    private String secretKey;
    private String saltKey;
    private String endpointUrl;

    public ThirdPartyIntegrationDetails(String apiKey, String secretKey, String saltKey, String endpointUrl) {
        this.apiKey = apiKey;
        this.secretKey = secretKey;
        this.saltKey = saltKey;
        this.endpointUrl = endpointUrl;
    }


}