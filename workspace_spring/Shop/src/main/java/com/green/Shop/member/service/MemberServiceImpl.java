package com.green.Shop.member.service;

import com.green.Shop.member.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("memberService")
public class MemberServiceImpl implements MemberService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    /*회원 가입*/
    @Override
    public void insertMem(MemberVO memberVO) {
        sqlSession.insert("memberMapper.insertMem", memberVO);
    }

    /*아이디 중복 확인*/
    /*아이디 중복 -> true*/
    /*아이디 중복x -> false*/
    @Override
    public boolean idDuplicate(String memID) {
        /*id가 null 이라면 회원가입 가능*/
        /*id가 조회되면 (null 아니면) 회원가입 불가능*/
        String id = sqlSession.selectOne("memberMapper.selectMemID", memID);
        return id!= null;
    }

    @Override
    public MemberVO selectLogin(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.selectLogin", memberVO);
    }
}