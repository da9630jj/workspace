package com.green.Board.service;

import com.green.Board.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("memberService")
public class MemberServiceImpl implements MemberService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    /*아이디 중복 확인*/
    /*아이디 중복 -> true*/
    /*중복 x -> false*/
    @Override
    public boolean isDuplicate(String memID) {
        //id가 null이면 회원가입 가능
        //id가 조회되면(null 아니면) 회원가입 불가능
        String id = sqlSession.selectOne("memberMapper.isDuplicate", memID);
        return id!= null;
    }

    /*회원가입*/
    @Override
    public void insertMem(MemberVO memberVO) {
        sqlSession.insert("memberMapper.insertMem", memberVO);
    }

    /*로그인*/

    @Override
    public MemberVO selectLogin(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.selectLogin", memberVO);
    }
}
