package com.green.Shop.item.controller;

import com.green.Shop.item.service.ItemService;
import com.green.Shop.item.vo.ImgVO;
import com.green.Shop.item.vo.ItemVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/item")
public class ItemController {
    @Resource(name = "itemService")
    public ItemService itemService;


    @GetMapping("/selectItem")
    public List<ItemVO> selectItem(){
        return itemService.selectItem();
    }


    @GetMapping("/itemDetail/{itemCode}")
    public ItemVO itemDetail(@PathVariable("itemCode") int itemCode){
        return itemService.itemDetail(itemCode);
    }

}
