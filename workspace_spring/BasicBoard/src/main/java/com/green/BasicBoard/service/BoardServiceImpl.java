package com.green.BasicBoard.service;

import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService {
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<BoardVO> select(SearchVO searchVO) {
        // List<BoardVO> list = sqlSession.selectList("boardMapper.select");
        // return list;
        return sqlSession.selectList("boardMapper.select", searchVO);
    }

    @Override
    public void write(BoardVO boardVO) {
        sqlSession.insert("boardMapper.write", boardVO);
    }

    @Override
    public BoardVO selectNum(int boardNum) {
        return sqlSession.selectOne("boardMapper.selectNum", boardNum);
    }

    @Override
    public void update(BoardVO boardVO) {
        sqlSession.update("boardMapper.update", boardVO);
    }

    @Override
    public void boardDelete(int boardNum) {
        sqlSession.delete("boardMapper.boardDelete", boardNum);
    }

    @Override
    public void updateReadCnt(int boardNum) {
        sqlSession.update("boardMapper.updateReadCnt", boardNum);
    }
}
