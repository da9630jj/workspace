import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../../common/Modal_1'

const Login = ({setLoginInfo, loginInfo}) => {
  const naviagate = useNavigate()

  //입력한 id, pw를 저장할 변수
  const [loginData, setLoginData] = useState({
    memID:'',
    memPW:''
  })

  function changeData(e){
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }

  //login 버튼 클릭 시 화면에 보여지는 모달창의 상태
  const [beforeLoginModal, setBeforeLoginModal]=useState(false);

  //login 쿼리가 실행된 후 보여지는 모달창의 상태
  const [afterLoginModal, setAfterLoginModal]=useState(false)

  //login 성공 실패 여부를 저장하는 변수
  const [isLoginSuccess, setISLoginSuccess]=useState(false);

  function goLogin(){
    axios.post('/member/login', loginData)
    .then((res)=>{
      console.log(res.data)
      if(loginData.memID =='' || loginData.memPW == ''){
        setBeforeLoginModal(true)
        return
      }
      if(res.data != ''){
        setISLoginSuccess(true);
        const logInfom={
          memID: res.data.memID,
          memName: res.data.memName,
          memRole: res.data.memRole
        }
        //로그인 정보를 가진 객체를 문자열 형태로 변환
        //객체 -> 문자열로 변환한 데이터를 JSON 데이터로 부른다.
        window.sessionStorage.setItem('logInfo', JSON.stringify(logInfom))
        setLoginInfo(logInfom)
      }else{
        setISLoginSuccess(false)
      }
      setAfterLoginModal(true)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  //login 쿼리 실행 후 띄는 모달 안의 내용
  function drawModalContent(){
    return(
      <>
        {
          isLoginSuccess
          ?
          <div>환영합니다.</div>
          :
          <div>ID, PW를 확인하세요.</div>
        }
      </>
    )
  }

  //login 쿼리 실행 후 띄는 모달 안의 확인 버튼 클릭 시 실행되는 내용
  function handleBtn(){
    if(isLoginSuccess){ //로그인 성공 시 확인 버튼 내용
      if(loginInfo.memRole=='USER'){
        naviagate('/')
      }else if(loginInfo.memRole=='ADMIN'){
        naviagate('/admin')
      }
    }else{  //로그인 실패 시 확인 버튼 내용

    }
  }

  return (
    <div className='join-div'>
      <table className='join-table'>
        <tbody>
          <tr>
            <td>아이디</td>
            <td> <input type='text' name='memID' placeholder='Input your Id' onChange={changeData}/> </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td> <input type='password' placeholder='Input your password' name='memPW' onChange={changeData}/> </td>
          </tr>
        </tbody>
      </table>
      <button className='last-btn' onClick={goLogin}>로그인</button>

      {/* login 중 id, pw 입력 여부 확인 모달창 */}
      {
        beforeLoginModal 
        ? 
        <Modal content={()=>{
          return(
            <div>ID, PW는 필수입력입니다.</div>
          );
        }} 
        setIsShow={setBeforeLoginModal} 
        clickCloseBtn={()=>{}} />
        :
        null
      }

      {/* login 쿼리 실행 후 띄는 모달 */}
      {
        afterLoginModal
        ?
        <Modal content={drawModalContent} 
        setIsShow={setAfterLoginModal}
        clickCloseBtn={handleBtn}/>
        :
        null
      }
    </div>
  )
}

export default Login