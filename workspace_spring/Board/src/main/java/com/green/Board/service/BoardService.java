package com.green.Board.service;

import com.green.Board.vo.BoardVO;
import com.green.Board.vo.SearchVO;

import java.util.List;

public interface BoardService {
    /*게시글 리스트*/
    List<BoardVO> selectBoard(SearchVO searchVO);

    /*상세페이지*/
    BoardVO detailBoard(int boardNum);

    /*글등록 페이지*/
    void writeBoard(BoardVO boardVO);

    /*글 수정 페이지*/
    BoardVO reviseForm(int boardNum);

    /*글 수정*/
    void revise(BoardVO boardVO);

    /*글 삭제*/
    void delBoard(int boardNum);

}
