package com.green.ReactBoard.controller;

import com.green.ReactBoard.service.AxiosService;
import com.green.ReactBoard.vo.BoardVO;
import com.green.ReactBoard.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AxiosController {
    @Resource(name = "axiosService")
    private AxiosService axiosService;

    //1번 버튼 클릭 시 호출되는 메소드
    @GetMapping("/getList")
    public List<BoardVO> getList(){
        return axiosService.getList();
    }

    @PostMapping("/insertBoard")
    public void insertBoard(@RequestBody MemberVO memberVO){
        System.out.println(1);
        System.out.println(memberVO);
    }

    //post 나 put 는 @RequestBody 로 받는다.
    @PutMapping("/updateBoard")
    public  int  updateBoard(@RequestBody BoardVO boardVO){
        System.out.println(boardVO);
        //데이터베이스 update 쿼리 실행
        return 10;
    }

    //get 이나 delete 는 @PathVariable 로 받는다.
    @GetMapping("/detail/{boardNum}")
    public void detail(@PathVariable("boardNum") int boardNum){
        System.out.println(boardNum);
    }

}
