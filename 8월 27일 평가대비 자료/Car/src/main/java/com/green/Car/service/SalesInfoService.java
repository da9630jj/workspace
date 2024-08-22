package com.green.Car.service;

import com.green.Car.vo.CarInfoVO;
import com.green.Car.vo.SalesInfoVO;

import java.util.List;

public interface SalesInfoService {

    void insertSalesInfo (SalesInfoVO salesInfoVO);

    List<SalesInfoVO> selectSales();
}
