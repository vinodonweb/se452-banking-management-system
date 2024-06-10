//package com.bank.management.settings;
//
//import lombok.extern.log4j.*;
//import org.springframework.beans.factory.annotation.*;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.*;
//
//@RestController
//@RequestMapping(value = "/api/airports")
//@Log4j2
//public class SettingsController {
//    @Autowired
//    private SettingsService service;
//
//    @GetMapping
//    public List<Settings> list() {
//        return service.list();
//    }
//
//    @PostMapping
//    public void save(@RequestBody Settings s) {
//        log.traceEntry("enter save", s);
//        service.save(s);
//        log.traceExit("exit save", s);
//    }
//
//
//    @DeleteMapping
//    public void delete(Long n) {
//        log.traceEntry("Enter delete", n);
//        service.delete(n);
//        log.traceExit("Exit delete");
//    }
//}
