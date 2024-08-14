package com.green.Shop.item.service;

import com.green.Shop.item.vo.CartVO;
import com.green.Shop.item.vo.ImgVO;
import com.green.Shop.item.vo.ItemVO;

import java.util.List;

public interface ItemService {
    List<ItemVO> selectItem();

    ItemVO itemDetail(int itemCode);

    void insertCart(CartVO cartVO);

    List<CartVO> selectCart(String memID);

}
