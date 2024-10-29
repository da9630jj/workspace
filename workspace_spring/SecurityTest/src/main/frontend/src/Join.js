import axios from 'axios';
import React, { useState } from 'react'

const Join = () => {
  // 입력한 회원정보를 저장할 state변수
  const [joinData, setJoinData] = useState({
    memId : '',
    memPw : '',
    memName : ''
  });

  // 입력 태그에 값 입력할 때마다 실행되는 함수
  const changeJoinData = (e)=>{
    setJoinData({
      ...joinData,
      [e.target.name]: e.target.value
    })
  }

  // 회원가입 버튼 클릭 시 실행
  const join=(e)=>{
    axios.post('/member/join', joinData)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((error)=>{console.log(error)})
  }

  return (
    <div>
      <h1>회원가입 페이지</h1>
      <div>
        아이디 : <input type='text' name='memId' onChange={changeJoinData}/>
      </div>
      <div>
        비밀번호 : <input type='password' name='memPw' onChange={changeJoinData}/>
      </div>
      <div>
        이름 : <input type='text' name='memName' onChange={changeJoinData}/>
      </div>
      <div>
        <button type='button' onClick={join}>회원가입</button>
      </div>
    </div>
  )
}

export default Join