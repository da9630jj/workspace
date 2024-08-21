package com.green.Car.controller;

import com.green.Car.service.SalesInfoService;
import com.green.Car.vo.CarInfoVO;
import com.green.Car.vo.SalesInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/salesInfo")
public class SalesInfoController {
    @Resource(name = "salesInfoService")
    public SalesInfoService salesInfoService;

    @PostMapping("/regCar")
    public void regCar(@RequestBody SalesInfoVO salesInfoVO){
        salesInfoService.insertSalesInfo(salesInfoVO);
    }

}
