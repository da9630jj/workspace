import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { memberActions } from './redux/memberState'

const Member = () => {
  // 회원 정보를 저장하고 있는 변수
  const member = useSelector(state=>state.memberState)
  const dispatch = useDispatch()

  useEffect(()=>{
    //디비에서 조회한 데이터
    const selectedMember ={
      memId: 'Java',
      memName: 'Hong',
      memAge: 30
    };

    //조회한 정보로 stoe 저장한 member객체의 정보를 변경
    dispatch(memberActions.changeMemberInfo());

  },[])

  return (
    <div>
      <h3>회원 정보 페이지</h3>
      <div>
        <div>회원 아이디 : </div>
        <div>회원 이름 : </div>
        <div>회원 나이 : </div>
      </div>
    </div>
  )
}

export default Member