package com.green.DataPractice.controller;

import com.green.DataPractice.vo.DeliveryVO;
import com.green.DataPractice.vo.OrderVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class OrderController {
    @GetMapping("/order")
    public String order(){
        return "/order";
    }
    @PostMapping("/delivery")
    public String delivery(OrderVO orderVO){

        System.out.println(orderVO);
        return "/delivery";
    }
    @PostMapping("/order_info")
    public String order_info(OrderVO orderVO, DeliveryVO deliveryVO){
        System.out.println(deliveryVO);
        return "/order_info";
    }

}
