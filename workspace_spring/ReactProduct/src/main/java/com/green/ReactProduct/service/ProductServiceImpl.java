package com.green.ReactProduct.service;

import com.green.ReactProduct.vo.OrderVO;
import com.green.ReactProduct.vo.ProductVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("proService")
public class ProductServiceImpl implements ProductService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    /*제품 리스트*/
    @Override
    public List<ProductVO> selectProduct() {
        List<ProductVO> productList = sqlSession.selectList("productMapper.selectProduct");
        return productList;
    }

    /*주문 리스트*/
    @Override
    public List<OrderVO> selectOrder() {
        List<OrderVO> orderList = sqlSession.selectList("productMapper.selectOrder");
        return orderList;
    }

    /*상품등록*/
    @Override
    public void insertProduct(ProductVO productVO) {
        sqlSession.insert("productMapper.insertProduct", productVO);
    }

    /*주문등록*/
    @Override
    public void updateOrder(OrderVO orderVO) {
        sqlSession.update("productMapper.updateOrder", orderVO);
    }

    /*세부사항*/
    @Override
    public ProductVO detail(int itemNum) {
        return sqlSession.selectOne("productMapper.detail", itemNum);
    }

    /*세부사항 수정*/
    @Override
    public void updateProduct(ProductVO productVO) {
        sqlSession.update("productMapper.updateProduct", productVO);
    }
}
