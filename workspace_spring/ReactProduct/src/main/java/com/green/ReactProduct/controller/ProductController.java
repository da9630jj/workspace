package com.green.ReactProduct.controller;

import com.green.ReactProduct.service.ProductService;
import com.green.ReactProduct.vo.OrderVO;
import com.green.ReactProduct.vo.ProductVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    @Resource(name = "proService")
    private ProductService proService;

    /*제품 리스트*/
    @GetMapping("/list")
    public List<ProductVO> productList(){
        List<ProductVO> productList = proService.selectProduct();
        return productList;
    }

    /*주문하기에 가져갈 제품 리스트*/
    @GetMapping("/order")
    public List<ProductVO> order(){
        List<ProductVO> order = proService.selectProduct();
        return order;
    }

    /*주문 리스트*/
    @GetMapping("/orderList")
    public List<OrderVO> orderList(){
        List<OrderVO> orderList = proService.selectOrder();
        return orderList;
    }

    /*상품등록*/
    @PostMapping("/reg")
    public void insertProduct(@RequestBody ProductVO productVO){
         proService.insertProduct(productVO);
    }

    /*주문등록*/
    @PutMapping("/goOrder/{orderNum}")
    public void updateOrder(@RequestBody OrderVO orderVO){
        proService.updateOrder(orderVO);
    }

    /*세부사항*/
     @GetMapping("/detail/{itemNum}")
    public ProductVO detail(@PathVariable("itemNum") int itemNum){
        return proService.detail(itemNum);
     }

    /*세부사항 수정*/
     @PutMapping("/updateProduct/{itemNum}")
    public void updateProduct(@RequestBody ProductVO productVO){
        proService.updateProduct(productVO);
     }

}
