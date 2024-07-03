package com.green.BasicBoard.service;

import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;

import java.util.List;

public interface BoardService {
    List<BoardVO> select(SearchVO searchVO);
    void write (BoardVO boardVO);
    BoardVO selectNum(int boardNum);
    void update(int boardNum);
    void boardDelete(int boardNum);
    void updateReadCnt(int boardNum);
}
