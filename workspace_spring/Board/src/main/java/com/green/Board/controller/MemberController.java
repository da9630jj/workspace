package com.green.Board.controller;

import com.green.Board.service.MemberService;
import com.green.Board.vo.MemberVO;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j //로그 남길 때 쓰는 어노테이션, 모든 클래스 위에서 사용 가능
@RestController
@RequestMapping("/member")
public class MemberController {
    @Resource(name = "memberService")
    public MemberService memberService;

    /*아이디 중복 확인*/
    @GetMapping("/checkID/{inputID}")
    public boolean checkID(@PathVariable("inputID") String inputID){
        log.info("============java===========");
        //true -> 아이디 사용 불가능
        //false -> 아이디 사용 가능
        return memberService.isDuplicate(inputID);
    }

    /*회원가입*/
    @PostMapping("/insertMem")
    public void insertMem(@RequestBody MemberVO memberVO){
        log.info("======================================");
        memberService.insertMem(memberVO);
    }

    /*로그인*/
    @PostMapping("/login")
    public MemberVO selectLogin(@RequestBody MemberVO memberVO) {
        //조회된 데이터가 없으면 member 는 null 이 된다.
         return memberService.selectLogin(memberVO);
    }
}
