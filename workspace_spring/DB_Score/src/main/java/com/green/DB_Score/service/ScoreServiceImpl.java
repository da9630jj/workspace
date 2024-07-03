package com.green.DB_Score.service;

import com.green.DB_Score.vo.ScoreVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("scoreService")
public class ScoreServiceImpl implements ScoreService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<ScoreVO> select() {
        List<ScoreVO> list = sqlSession.selectList("scoreMapper.select");
        return list;
    }

    @Override
    public void insert(ScoreVO scoreVO) {
        sqlSession.insert("scoreMapper.insert", scoreVO);
    }

    @Override
    public ScoreVO selectNum(ScoreVO scoreVO) {
        ScoreVO student = sqlSession.selectOne("scoreMapper.selectNum", scoreVO);
        return student;
    }

    @Override
    public void delete(ScoreVO scoreVO) {
         sqlSession.delete("scoreMapper.delete", scoreVO);
    }

    @Override
    public void update(ScoreVO scoreVO) {
        sqlSession.update("scoreMapper.update", scoreVO);
    }
}
