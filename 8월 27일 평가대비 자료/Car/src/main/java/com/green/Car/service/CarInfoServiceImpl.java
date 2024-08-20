package com.green.Car.service;

import com.green.Car.vo.CarInfoVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("carInfoService")
public class CarInfoServiceImpl implements CarInfoService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<CarInfoVO> carList() {
        return sqlSession.selectList("carInfoMapper.carList");
    }

    @Override
    public void insertCar(CarInfoVO carInfoVO) {
        sqlSession.insert("carInfoMapper.insertCar", carInfoVO);
    }

}
