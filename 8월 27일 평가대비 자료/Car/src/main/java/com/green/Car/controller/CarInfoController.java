package com.green.Car.controller;

import com.green.Car.service.CarInfoService;
import com.green.Car.vo.CarInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carInfo")
public class CarInfoController {
    @Resource(name = "carInfoService")
    public CarInfoService carInfoService;

    /*차 목록 가져오기*/
    @GetMapping("/carManage")
    public List<CarInfoVO> carList(){
        List<CarInfoVO> carList= carInfoService.carList();
        return carList;
    }

    /*차량 등록하기*/
    @PostMapping("/insertCar")
    public void insertCar(@RequestBody CarInfoVO carInfoVO) {
        carInfoService.insertCar(carInfoVO);
    }

}
