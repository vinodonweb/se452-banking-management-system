package com.bank.management.dashBoard;

import lombok.extern.log4j.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@Log4j2
@CrossOrigin(origins = "http://localhost:4200/")

public class DashboardController {

//    @Autowired
//    private DashboardService dashboardService;

//    @GetMapping
//    public Dashboard getDashboardData(@RequestParam Long accountId) {
//        return dashboardService.getDashboardData(accountId);
//    }

//    @GetMapping
//    public List<Dashboard> getDashboard() {
//        return dashboardService.getDashboard();
//    }
}
