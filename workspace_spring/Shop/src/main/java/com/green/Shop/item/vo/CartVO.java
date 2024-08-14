package com.green.Shop.item.vo;

import lombok.Data;

import java.util.List;

@Data
public class CartVO {
    private int cartCode;
    private int itemCode;
    private int cartCnt;
    private String memID;
    private String cartDate;
    private List<ItemVO> itemList;
    private List<ImgVO> imgList;

}
