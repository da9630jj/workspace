package com.green.Car.service;

import com.green.Car.vo.CarInfoVO;
import com.green.Car.vo.SalesInfoVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("salesInfoService")
public class SalesInfoServiceImpl implements SalesInfoService{
    @Autowired
    private SqlSessionTemplate sqlSession;


    @Override
    public void insertSalesInfo(SalesInfoVO salesInfoVO) {
        sqlSession.insert("salesInfoMapper.insertSalesInfo", salesInfoVO);
    }

    @Override
    public List<SalesInfoVO> selectSales() {
        return sqlSession.selectList("salesInfoMapper.selectSales");
    }
}
