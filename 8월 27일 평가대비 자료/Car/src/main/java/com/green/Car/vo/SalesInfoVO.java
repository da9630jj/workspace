package com.green.Car.vo;

import lombok.Data;

@Data
public class SalesInfoVO {
    private int salesNum;
    private String buyer;
    private String buyerTelNum;
    private String color;
    private String salesDate;
    private int modelNum;
    private CarInfoVO carInfoVO;
}
