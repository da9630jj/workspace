package com.green.Board.service;

import com.green.Board.vo.BoardVO;
import com.green.Board.vo.SearchVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService {
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<BoardVO> selectBoard(SearchVO searchVO) {
        List<BoardVO> selectBoard = sqlSession.selectList("boardMapper.selectBoard", searchVO);
        return selectBoard;
    }

    @Override
    public BoardVO detailBoard(int boardNum) {
        return sqlSession.selectOne("boardMapper.detailBoard", boardNum);
    }

    @Override
    public void writeBoard(BoardVO boardVO) {
        sqlSession.insert("boardMapper.writeBoard", boardVO);
    }

    @Override
    public BoardVO reviseForm(int boardNum) {
        return sqlSession.selectOne("boardMapper.detailBoard", boardNum);
    }

    @Override
    public void revise(BoardVO boardVO) {
        sqlSession.update("boardMapper.revise", boardVO);
    }

    @Override
    public void delBoard(int boardNum) {
        sqlSession.delete("boardMapper.delBoard", boardNum);
    }
}


