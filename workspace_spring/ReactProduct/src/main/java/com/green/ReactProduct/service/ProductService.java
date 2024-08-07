package com.green.ReactProduct.service;

import com.green.ReactProduct.vo.OrderVO;
import com.green.ReactProduct.vo.ProductVO;

import java.util.List;

public interface ProductService {
    /*제품 리스트*/
    List<ProductVO> selectProduct();
    /*주문 리스트*/
    List<OrderVO> selectOrder();
    /*상품등록*/
    void insertProduct(ProductVO productVO);
    /*주문등록*/
    void updateOrder(OrderVO orderVO);
    /*세부사항*/
    ProductVO detail(int itemNum);
    /*세부사항 수정*/
    void updateProduct(ProductVO productVO);





}
