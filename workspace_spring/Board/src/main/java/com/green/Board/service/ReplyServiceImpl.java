package com.green.Board.service;

import com.green.Board.vo.ReplyVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<ReplyVO> selectReply(int boardNum) {
        List<ReplyVO> selectReply = sqlSession.selectList("replyMapper.selectReply", boardNum);
        return selectReply;
    }

    @Override
    public void insertReply(ReplyVO replyVO) {
        sqlSession.insert("replyMapper.insertReply", replyVO);
    }

    @Override
    public void delReply(int replyNum) {
         sqlSession.delete("replyMapper.delReply", replyNum);
    }

    @Override
    public void delAllReply(int boardNum) {
        sqlSession.delete("replyMapper.delAllReply", boardNum);
    }
}
