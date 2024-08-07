package com.green.Board.controller;

import com.green.Board.service.BoardService;
import com.green.Board.vo.BoardVO;
import com.green.Board.vo.SearchVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {
    @Resource(name = "boardService")
    public BoardService boardService;

    @PostMapping("/boardList")
    public List<BoardVO> selectBoard(@RequestBody(required = false) SearchVO searchVO){
        return  boardService.selectBoard(searchVO);
    }

    @GetMapping("/detail/{boardNum}")
    public BoardVO detailBoard(@PathVariable("boardNum") int boardNum){
        return boardService.detailBoard(boardNum);
    }

    @PostMapping("/writeBoard")
    public void writeBoard(@RequestBody BoardVO boardVO){
        boardService.writeBoard(boardVO);
    }

    @GetMapping("/reviseForm/{boardNum}")
    public BoardVO reviseForm(@PathVariable("boardNum") int boardNum) {
        return boardService.reviseForm(boardNum);
    }

    @PutMapping("/revise")
    public void revise(@RequestBody BoardVO boardVO){
        boardService.revise(boardVO);
    }

    @DeleteMapping("/delBoard/{boardNum}")
    public void delBoard(@PathVariable("boardNum") int boardNum){
        boardService.delBoard(boardNum);
    }



}
