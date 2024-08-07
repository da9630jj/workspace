package com.green.Car.controller;

import com.green.Car.service.SalesInfoService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/salesInfo")
public class SalesInfoController {
    @Resource(name = "salesInfoService")
    public SalesInfoService salesInfoService;

}
