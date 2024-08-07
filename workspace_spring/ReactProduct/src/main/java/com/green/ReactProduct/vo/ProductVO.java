package com.green.ReactProduct.vo;

import lombok.Data;

@Data
public class ProductVO {
    private int itemNum; //상품번호
    private String itemName; //상품명
    private int itemPrice; //상품 가격
    private String seller; // 판매자
    private String itemIntro; // 상품설명
    private String regDate;


}
