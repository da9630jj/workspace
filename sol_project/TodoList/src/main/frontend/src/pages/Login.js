import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = ({setLoginInfo, loginInfo}) => {
  const navigate = useNavigate();

  // 로그인 성공 실패 여부
  const [isLogin, setIsLogin] = useState(false);

  // id, pw 저장 변수
  const [loginData, setLoginData] = useState({
    id:'',
    pw:''
  });

  function saveLoginData(e){
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
    })
  }

  function login(){
    if(loginData.id=='' || loginData.pw== ''){
      alert('이민재 바보')
    }

    axios.post('/user/login', loginData)
    .then((res)=>{
      if(res.data==''){
        setIsLogin(false);
        alert('로그인에 실패하였습니다.')
      }
      else{
        setIsLogin(true)
        const loginInfo={
          id:res.data.id,
          pw:res.data.pw,
          userName: res.data.userName,
          email: res.data.email
        }

        const json_loginInfo = JSON.stringify(loginInfo);
        window.sessionStorage.setItem('loginInfo', json_loginInfo);
        setLoginInfo(loginInfo);
        navigate('/')
      }
    })
    .catch((error)=>{console.log(error)})
  }


  return (
    <div className='mainContainer'>

      <div className='loginContainer'>
        <h1>login</h1>
        <div className='loginContent'>
          <div className='idContent'>
            <span>ID : </span>
            <input type='text' placeholder='Input your ID' name='id' onChange={(e)=>{saveLoginData(e)}}/>
          </div>
  
          <div className='idContent'>
            <span>PW : </span>
            <input type='password' placeholder='Input your PW' name='pw' onChange={(e)=>{saveLoginData(e)}}/>
          </div>
        </div>
        <button onClick={login}>Login</button>
      </div>


      <div className='loginContainer'>
        <h1>Join</h1>
        <div className='loginContent'>
          <div className='idContent'>
            <span>Join ID : </span>
            <input type='text' placeholder='Input your ID' name='id'/>
          </div>
  
          <div className='idContent'>
            <span>Join PW : </span>
            <input type='password' placeholder='Input your PW' name='pw'/>
          </div>

          <div className='idContent'>
            <span>Name : </span>
            <input type='password' placeholder='Input your name' name='userName'/>
          </div>

          <div className='idContent'>
            <span>Email : </span>
            <input type='password' placeholder='Input your email' name='email'/>
          </div>
        </div>
        <button>Join</button>
      </div>



    </div>
  )
}

export default Login