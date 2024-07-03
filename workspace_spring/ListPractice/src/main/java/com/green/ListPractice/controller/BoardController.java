package com.green.ListPractice.controller;

import com.green.ListPractice.vo.BoardVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@Controller
public class BoardController {
    //게시글 목록을 저장할 리스트 생성
    List<BoardVO> boardList = new ArrayList<>();

    //게시글 목록 페이지로 이동
    @GetMapping("/list")
    public String boardList(Model model){
        //게시글 목록 데이터를 html로 전달
        model.addAttribute("boardList" , boardList);
        return "board_list";
    }
    //글쓰기 페이지로 이동
    @GetMapping("/writeForm")
    public String writeForm(){
        return "board_write_form";
    }
    //작성한 내용으로 글 등록
    @PostMapping("/regBoard")
    public String regBoard(BoardVO boardVO){
        System.out.println(boardVO);
        //글 등록
        boardList.add(boardVO);
        //return에는 원래 이동할 html 파일명 작성
        //redirect: -> 컨트롤러로 이동하겠다.
        return "redirect:/list";
    }

    //게시글 목록 페이지에서 제목 클릭 시 상세 페이지로 이동
    @GetMapping("/board_detail")
    public String boardDetail(@RequestParam(name = "boardNum") int boardNum, Model model){
        //내가 클릭한 게시글의 상세 정보를 html 에 뿌려주고 싶음.
        //1. 내가 클릭한 게시글을 어떻게 구별하지?
        //   -> 글번호로 구분
        //  1) 내가 클릭한 게시글의 글번호를 알아야 함
        //  2) 게시글 목록(boardList)에서 내가 가지고 온 글 번호와 일치하는 게시글을 찾음
        //2. 내가 찾은 게시글을 html 에 데이터 전달
        BoardVO result = null;
        for (BoardVO board: boardList){
            if (board.getBoardNum() == boardNum) {
                result = board;
            }
        }
        model.addAttribute("board", result);
        return "board_detail";
    }
    //게시글 삭제 -> 게시글 목록 페이지로 이동
    @GetMapping("/delete")
    public String delete(@RequestParam(name = "boardNum") int boardNum){
        int deleteIndex = 0; //삭제할 게시글의 index 번호
        for (int i = 0; i<boardList.size(); i++){
            if (boardList.get(i).getBoardNum() == boardNum) {
                deleteIndex = i;
            }
        }
        boardList.remove(deleteIndex);
        return "redirect:/list";
    }
}
