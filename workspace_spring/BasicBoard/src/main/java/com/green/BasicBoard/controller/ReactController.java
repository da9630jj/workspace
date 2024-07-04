package com.green.BasicBoard.controller;

import com.green.BasicBoard.service.BoardServiceImpl;
import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReactController {
    @Resource(name = "boardService")
    private BoardServiceImpl boardService;

    //게시글 목록 화면
    @RequestMapping("/boardList1")
    public String boardList(Model model, SearchVO searchVO){
        //목록 조회
        List<BoardVO> list = boardService.select(searchVO);
        return "board_list";
    }




}
