package com.green.BasicBoard.controller;

import com.green.BasicBoard.service.BoardService;
import com.green.BasicBoard.service.BoardServiceImpl;
import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class BoardController {
    @Resource(name = "boardService")
    private BoardServiceImpl boardService;

    //게시글 목록 화면
    @RequestMapping("/boardList")
    public String boardList(Model model, SearchVO searchVO){
        //searchVO 데이터 검사
        System.out.println(searchVO);

        //목록 조회
        List<BoardVO> list = boardService.select(searchVO);
        model.addAttribute("boardList", list);
        return "board_list";
    }
    //글 작성 화면
    @GetMapping("/writeForm")
    public String writeForm(){
        return "write_form";
    }
    //글 작성
    @PostMapping("write")
    public String write(BoardVO boardVO){
        boardService.write(boardVO);
        return "redirect:/boardList";
    }
    //글 상세 조회 화면
    @GetMapping("/boardDetail")
    public String boardDetail(@RequestParam(name = "boardNum") int boardNum,Model model){
        //조회수 증가
        boardService.updateReadCnt(boardNum);
        model.addAttribute("board", boardService.selectNum(boardNum));
        return "board_detail";
    }
    //글 수정 화면
    @GetMapping("/updateForm")
    public String updateForm(@RequestParam(name = "boardNum") int boardNum,Model model){
        model.addAttribute("board",boardService.selectNum(boardNum));
        return "update_form";
    }
    //글 수정
    @PostMapping("/boardUpdate")
    public String boardUpdate(BoardVO boardVO,Model model){
        return "redirect:/boardDetail?boardNum="+ boardVO.getBoardNum();
    }
    //글 삭제
    @GetMapping("/boardDel")
    public String boardDel(int boardNum){
        boardService.boardDelete(boardNum);
        return "redirect:/boardList";
    }



}
