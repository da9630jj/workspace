package com.green.Shop.member.service;

import com.green.Shop.member.vo.MemberVO;

import java.util.List;

public interface MemberService {
    /*회원 가입*/
    void insertMem(MemberVO memberVO);

    /*아이디 중복 확인*/
    boolean idDuplicate(String memID);

    /*로그인*/
    MemberVO selectLogin(MemberVO memberVO);
}
