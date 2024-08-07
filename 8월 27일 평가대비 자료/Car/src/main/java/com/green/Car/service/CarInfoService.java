package com.green.Car.service;

import com.green.Car.vo.CarInfoVO;

import java.util.List;

public interface CarInfoService {
    List<CarInfoVO> carList();

    void insertCar(CarInfoVO carInfoVO);

}
