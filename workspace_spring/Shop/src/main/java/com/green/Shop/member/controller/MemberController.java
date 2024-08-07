package com.green.Shop.member.controller;

import com.green.Shop.member.service.MemberService;
import com.green.Shop.member.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
public class MemberController {
    @Resource(name = "memberService")
    public MemberService memberService;

    /*회원가입*/
    @PostMapping("/insertMem")
    public void insertMem(@RequestBody MemberVO memberVO){
        System.out.println(111);
        memberService.insertMem(memberVO);
    }

    /*아이디 중복 확인*/
    @GetMapping("/idDuplicate/{memID}")
    public boolean idDuplicate(@PathVariable("memID") String memID) {
        return memberService.idDuplicate(memID);
    }

    /*로그인*/
    @PostMapping("/login")
    public MemberVO selectLogin(@RequestBody MemberVO memberVO){
        return memberService.selectLogin(memberVO);
    }
}
