import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate();
  
  // 서버로 요청 시 토큰 가져가는 코드
  const test = () => {
    axios.get('/getToken/5',{
      headers : {
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then(res =>{})
    .catch(error=>{console.log(error)})
  }
  const test1 =()=>{
    axios.get('/test1', {
      headers : {
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then(res=>{console.log('success')})
    .catch(error=>{console.log(error)})
  }
  const test2 =()=>{
    axios.get('/test2', {
      headers : {
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then(res=>{console.log('success')})
    .catch(error=>{console.log(error)})
  }
  const test3 =()=>{
    axios.get('/test3', {
      headers : {
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then(res=>{console.log('success')})
    .catch(error=>{console.log(error)})
  }
  const test4 =()=>{
    axios.get('/test4', {
      headers : {
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then(res=>{console.log('success')})
    .catch(error=>{console.log(error)})
  }
  const test5 =()=>{
    axios.get('/test5', {
      headers : {
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then(res=>{console.log('success')})
    .catch(error=>{console.log(error)})
  }
  

  return (
    <div>
      <h1> Main Page</h1>
      <h3><span onClick={()=>{navigate('/loginForm')}}>로그인 페이지로 이동</span></h3>
      <h3><span onClick={()=>{navigate('/joinForm')}}>회원가입 페이지로 이동</span></h3>
      <h3><span onClick={()=>{test()}}>서버에 토큰 가져가기</span></h3>
      <h3 onClick={()=>{test1()}}>MainController-test1 메서드 : 누구나 접근</h3>
      <h3 onClick={()=>{test2()}}>MainController-test2 메서드 : 인증된 사람만 접근</h3>
      <h3 onClick={()=>{test3()}}>MainController-test3 메서드 : 인증된 일반회원만 접근</h3>
      <h3 onClick={()=>{test4()}}>MainController-test4 메서드 : 인증된 관리자만 접근</h3>
      <h3 onClick={()=>{test5()}}>MainController-test5 메서드 : 인증된 매니저 or 관리자만 접근</h3>
    </div>
  )
}

export default Main