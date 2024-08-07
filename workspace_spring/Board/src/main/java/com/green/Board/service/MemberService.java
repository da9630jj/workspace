package com.green.Board.service;

import com.green.Board.vo.MemberVO;

import java.util.List;

public interface MemberService {

    /*아이디 중복 확인*/
    boolean isDuplicate(String memID);

    /*회원가입*/
    void insertMem(MemberVO memberVO);

    /*로그인*/
    MemberVO selectLogin(MemberVO memberVO);


}
