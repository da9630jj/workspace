package com.green.ReactBoard.service;

import com.green.ReactBoard.vo.BoardVO;

import java.util.List;

public interface BoardService {

    //게시글 목록 조회
    List<BoardVO> getBoardList();

    BoardVO getBoard(int boardNum);

    void delBoard(int boardNum);

    void insertBoard(BoardVO boardVO);

    int updateBoard(BoardVO boardVO);

}
