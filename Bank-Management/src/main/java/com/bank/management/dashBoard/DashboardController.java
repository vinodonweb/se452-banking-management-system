package com.bank.management.dashBoard;

import lombok.extern.log4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/dashboard")
@Log4j2
@CrossOrigin(origins = "*") // Allow all origins

public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/data")
    //@GetMapping
    public Dashboard getDashboardData(@RequestParam Long accountId) {
        return dashboardService.getDashboardData(accountId);
    }

    @GetMapping("/all")
    //@GetMapping
    public List<Dashboard> getDashboard() {
        return dashboardService.getDashboard();
    }
}
