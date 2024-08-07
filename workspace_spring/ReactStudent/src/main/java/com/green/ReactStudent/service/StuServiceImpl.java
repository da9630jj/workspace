package com.green.ReactStudent.service;

import com.green.ReactStudent.vo.StudentVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("stuService")
public class StuServiceImpl implements StuService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<StudentVO> selectStu() {
        List<StudentVO> stuList=sqlSession.selectList("stuMapper.selectStu");
        return stuList;
    }

    @Override
    public void insertStu(StudentVO studentVO) {
        sqlSession.insert("stuMapper.insertStu", studentVO);
    }

    @Override
    public StudentVO detail(int stuNum) {
        return sqlSession.selectOne("stuMapper.detail", stuNum);
    }

    @Override
    public List<StudentVO> delStu() {
        List<StudentVO> student = sqlSession.selectList("stuMapper.delStu");
        return student;
    }

    @Override
    public void delete(int stuNum) {
        sqlSession.delete("stuMapper.delete", stuNum);
    }

    @Override
    public void putScore(StudentVO studentVO) {
        sqlSession.update("stuMapper.putScore", studentVO);
    }

    @Override
    public StudentVO getScore(int stuNum) {
        return sqlSession.selectOne("stuMapper.getScore", stuNum);
    }
}
