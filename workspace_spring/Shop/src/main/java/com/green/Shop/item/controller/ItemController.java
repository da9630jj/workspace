package com.green.Shop.item.controller;

import com.green.Shop.item.service.ItemService;
import com.green.Shop.item.vo.ItemVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/item")
public class ItemController {
    @Resource(name = "itemService")
    public ItemService itemService;

    @PostMapping("/insertItem")
    public void insertItem(@RequestBody ItemVO itemVO){
        itemService.insertItem(itemVO);
    }
}
