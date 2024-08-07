package com.green.Board.service;

import com.green.Board.vo.ReplyVO;

import java.util.List;

public interface ReplyService {

    List<ReplyVO> selectReply(int boardNum);

    void insertReply(ReplyVO replyVO);

    void delReply(int replyNum);

    void delAllReply(int boardNum);

}
