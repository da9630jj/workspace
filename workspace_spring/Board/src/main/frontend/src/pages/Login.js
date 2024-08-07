import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as memberAPI from '../apis/memberAPI'

//리액트는 화면을 새로고침 할 때마다 데이터가 초기화 되기 때문에
//로그인을 했다는 정보를 일반적인 방식으로 저장해도 새로고침하면 로그인이 풀려버린다.

//새로고침 해도 정보가 사라지지 않는 저장 공간을 두 개 제공
//이 두개의 저장 공간은 client pc 에 존재
//문자열 데이터만 저장 가능
// - localStorage : 여기에 저장되는 데이터는 직접 삭제하지 않는 한 반영구적으로 보전, 
//                  인터넷이 끊기거나 컴퓨터를 재부팅해도 데이터가 살아있음.
//                  브라우저에 다른 탭끼리도 데이터가 공유
// - sessionStorage : 여기에 저장되는 데이터는 인터넷(브라우저)을 종료하면 자동으로 사라짐
//                    브라우저의 탭이 달라도 데이터 공유가 안 됨.

//사용법 
// - 데이터 저장 : window.sessionStorage.setItem(key, value);
// - 데이터 읽기 : window.sessionStorage.getItem(key);
// - 데이터 삭제 : window.sessionStorage.removeItem(key)
// - 전체 데이터 삭제 : window.sessionStorage.clear


const Login = ({setLoginInfo}) => {
  //sessionStorage에 데이터 입력
  window.sessionStorage.setItem('name', 'Kim');
  window.sessionStorage.setItem('age', 20);
  const m = {
    stuNum :1,
    stuName : 'Kim',
    score : 80
  }

  //객체 -> json으로 변환(객체를 문자로 변환)
  //JSON.stringify();
  //json -> 객체
  //JSON.parse();
  window.sessionStorage.setItem('member', JSON.stringify(m))

  const data = window.sessionStorage.getItem('member')
  console.log(data)
  //json 데이터를 가져오면 문자로 인식한다.
  const result = JSON.parse(data)
  console.log(result)

  //객체나 배열을 Storage에 저장할 때 json형태로 저장 할 수 있음.
  //json(javascript object notation) -> 자바스크립트의 객체를 문자화 시킨 것
  //{name : 'kim', age : 20} -> "{name : 'kim', age : 20}"
  //모든 언어에서 공통으로 해석할 수 있는 자료형 
  //

  //sessionStorage에서 데이터 읽기
  console.log(window.sessionStorage.getItem('name'));


  const navigate = useNavigate()
  const [loginData, setloginData]= useState({
    memID:'',
    memPW:''
  });

  function change(e){
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  function goLogin(){
    //아이디, 비번 입력했는지 유효성 검사
    if(loginData.memID==''){
      alert('아이디를 입력하세요.')
      return
    }
    if(loginData.memPW==''){
      alert('비밀번호를 입력하세요.')
      return
    }

    memberAPI.goLogin(loginData)
    .then((res)=>{
      //조회결과에 따라 로그인 실행
      //조회결과가 있으면 로그인 처리
      //조회결과가 없으면 다시 로그인 할 수 있도록 처리
      console.log(res.data)
      if(res.data != ''){
        alert('로그인 성공')

        //sessionStorage에 로그인한 사람의 아이디, 이름, 권한을 저장
        const logInfom={
          memID: res.data.memID,
          memName : res.data.memName,
          memRole : res.data.memRole
        }
        window.sessionStorage.setItem('logInfo', JSON.stringify(logInfom))
        setLoginInfo(logInfom)
        navigate('/')

      }else{
        alert('ID 혹인 PW가 틀렸습니다.')
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='list'>
      <h2>자유게시판</h2>
      <div className='joinDisplay'>
        <p>아이디</p>
        <input type='text' className='join' name='memID' onChange={(e)=>{change(e)}}/>
        <p>비밀번호</p>
        <input type='password' className='join' name='memPW' onChange={(e)=>{change(e)}}/>
      </div>
      <div>
        <input type='button' value={'로그인'} className='btn' onClick={(e)=>{goLogin()}}/>
        <input type='button' value={'목록가기'} className='btn' onClick={(e)=>{navigate('/')}}/>
      </div>
    </div>
  )
}

export default Login