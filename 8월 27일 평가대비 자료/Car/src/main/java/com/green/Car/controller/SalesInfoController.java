package com.green.Car.controller;

import com.green.Car.service.SalesInfoService;
import com.green.Car.vo.CarInfoVO;
import com.green.Car.vo.SalesInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/salesInfo")
public class SalesInfoController {
    @Resource(name = "salesInfoService")
    public SalesInfoService salesInfoService;

    @PostMapping("/regCar")
    public void regCar(@RequestBody SalesInfoVO salesInfoVO){
        salesInfoService.insertSalesInfo(salesInfoVO);
    }

    @GetMapping("/selectSales")
    public List<SalesInfoVO> selectSales(){
        return salesInfoService.selectSales();
    }
}
