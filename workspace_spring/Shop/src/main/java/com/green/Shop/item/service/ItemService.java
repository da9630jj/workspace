package com.green.Shop.item.service;

import com.green.Shop.item.vo.ImgVO;
import com.green.Shop.item.vo.ItemVO;

import java.util.List;

public interface ItemService {
    List<ItemVO> selectItem();

    ItemVO itemDetail(int itemCode);


}
