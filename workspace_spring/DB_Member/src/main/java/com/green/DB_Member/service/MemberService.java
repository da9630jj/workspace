package com.green.DB_Member.service;

import com.green.DB_Member.vo.MemberVO;

//TEST_MEMBER 테이블의 디비 조작 기능 정의
public interface MemberService {
    //회원 목록 조회 SELECT

    //회원 상세정보 조회 SELECT

    //회원 정보 등록 INSERT
    void insertMember(MemberVO memberVO);

    //회원 삭제 DELETE

    //회원 정보 수정 UPDATE
}
