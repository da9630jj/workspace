package com.green.Board.controller;

import com.green.Board.service.ReplyService;
import com.green.Board.vo.ReplyVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reply")
public class ReplyController {
    @Resource(name = "replyService")
    public ReplyService replyService;

    @GetMapping("/selectReply/{boardNum}")
    public List<ReplyVO> selectReply (@PathVariable("boardNum") int boardNum){
        List<ReplyVO> selectReply = replyService.selectReply(boardNum);
        return selectReply;
    }

    @PostMapping("/insertReply")
    public void insertReply (@RequestBody ReplyVO replyVO){
        replyService.insertReply(replyVO);
    }

    @DeleteMapping("/delReply/{replyNum}")
    public void delReply (@PathVariable ("replyNum") int replyNum){
        replyService.delReply(replyNum);
    }

    @DeleteMapping("/delAllReply/{boardNum}")
    public void delAllReply(@PathVariable ("boardNum") int boardNum){
        replyService.delAllReply(boardNum);
    }
}
