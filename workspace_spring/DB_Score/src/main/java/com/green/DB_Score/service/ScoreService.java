package com.green.DB_Score.service;

import com.green.DB_Score.vo.ScoreVO;

import java.util.List;

public interface ScoreService {
    List<ScoreVO> select();
    void insert(ScoreVO scoreVO);
    ScoreVO selectNum(ScoreVO scoreVO);
    void delete(ScoreVO scoreVO);
    void update(ScoreVO scoreVO);

}
