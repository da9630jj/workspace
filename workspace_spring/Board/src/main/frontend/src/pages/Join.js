import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as memberAPI from '../apis/memberAPI'
import { isDisabled } from '@testing-library/user-event/dist/utils'

const Join = () => {
  const navigate = useNavigate()

  //회원가입 시 가져가야 하는 데이터를 저장할 state 변수
  const [joinMem, setJoinMem]=useState({
    memID:'',
    memPW:'',
    checkMemPW:'',
    memName:'',
    gender:'male'
  })

  //input 태그에 값 입력 시 joinData 변경
  function change(e){
    //아이디 input 태그의 값이 변경되면 회원가입 버튼을 비활성화
    if(e.target.name=='memID'){
      setIsDisabled(true)
    }

    setJoinMem({
      ...joinMem,
      [e.target.name]:e.target.value
    })
  }

  //버튼 활성화 여부 state 변수
  const [isDisabled, setIsDisabled] = useState(true);

  //아이디 중복 확인 함수
  function checkID(){
    if(joinMem.memID==''){
      alert('아이디를 입력하세요.')
      return
    }
    //아이디 값을 가지고 자바로 가서 중복 확인 쿼리를 실행
    memberAPI.checkID(joinMem.memID)
    .then((res)=>{
      const result = res.data;
      alert(result ? 'ID 중복' : '사용가능');
      //사용 가능한 id면 버튼 활성화
      if(!result){
        setIsDisabled(false)
      }
    })

    .catch((error)=>{console.log(error)})
  }

  //  회원가입
  function goJoin(){
    //validation 처리 (유효성 검사)
    if(joinMem.memPW!=joinMem.checkMemPW){
      alert('비밀번호 불일치')
      return
    }
    //아이디는 4~8글자
    const idLength=joinMem.memID.length;
    if(idLength <4 || idLength >8){
      alert('아이디는 4~8글자여야 합니다.')
      return
    }


    if(joinMem.memID==''){
      alert('아이디를 입력하세요.')
      return
    }
    if(joinMem.memPW==''){
      alert('비밀번호를 입력하세요')
      return
    }
    if(joinMem.gender==''){
      alert('성별을 선택하세요')
      return
    }

    memberAPI.goJoin(joinMem)
    .then((res)=>{
      console.log(res.data)
      alert('회원가입 성공')
      navigate('/login')
    })
    .catch((error)=>{console.log(error)})
  }

  return (
    <div className='list'>
      <h2>자유게시판</h2>
      <div className='joinDisplay'>
        <p>아이디</p>
        <input type='text' className='id' name='memID' onChange={(e)=>{change(e)}}/> <input type='button' value={'중복확인'} className='btnID' onClick={(e)=>{checkID()}}/>
        <p>비밀번호</p>
        <input type='text' className='join' name='memPW' onChange={(e)=>{change(e)}}/>
        <p>비밀번호 확인</p>
        <input type='text' className='join' name='checkMemPW' onChange={(e)=>{}}/>
        <p>이름</p>
        <input type='text' className='join' name='memName' onChange={(e)=>{change(e)}}/>
      </div>
      <div>
        성별 
        <input type='radio' name='gender' onChange={(e)=>{change(e)}} value={'male'} checked={joinMem.gender=='male'}/> 남 
        <input type='radio' name='gender' onChange={(e)=>{change(e)}} value={'female'} checked={joinMem.gender=='female'}/> 여 
      </div>
      <input type='button' value={'회원가입'} className='btn'
      onClick={(e)=>{goJoin()}} disabled={isDisabled}/>
    </div>
  )
}

export default Join