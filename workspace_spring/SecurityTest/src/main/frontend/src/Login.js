import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  // 입력한 로그인 저보를 저장할 state 변수
  const [loginData, setLoginData]=useState({
    memId: '',
    memPw: ''
  });

  // 입력한 정보로 로그인데이터 변경하는 함수
  const changeLoginData=(e)=>{
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }
  
  // 로그인 버튼 클릭 시 실행 함수
  const login=(e)=>{
    axios.post('/member/login', loginData)
    .then((res)=>{
    console.log('로그인 성공')
    // 응답 헤더에 담긴 토큰을 localStorage 저장
    // localStorage.setItem(저장할 이름, 저장할 데이터);
    localStorage.setItem('authoriztion', res.headers.authorization);
    })
    .catch((error)=>{
      // 오류코드가 401 이면 다시 로그인

      // 오류코드가 401 아닐 때
    })

  }

  // 아이디와 비밀번호 input 태그의 name 속성은 반드시
  // 자바의 LoginFilter 클래스 생성자 안에서 설정한 파라메터 이름으로 지정

  return (
    <div>
      <div>
        아이디 : <input type='text' name='memId' onChange={changeLoginData}/>
      </div>
      <div>
        비밀번호 : <input type='password' name='memPw' onChange={changeLoginData}/>
      </div>
      <div>
        <button type='button' onClick={login}>로그인</button>
      </div>
    </div>
  )
}

export default Login