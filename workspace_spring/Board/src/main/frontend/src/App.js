import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Board from './pages/Board';
import Join from './pages/Join';
import Login from './pages/Login';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import Write from './pages/Write';
import ReviseForm from './pages/ReviseForm';

function App() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({});

  // 문자열로 받아지는 로그인정보 객체로 변환
  useEffect(()=>{
    const loginDataString = window.sessionStorage.getItem('logInfo');
    if(loginDataString != null){
      const loginData = JSON.parse(loginDataString);
      setLoginInfo(loginData);
      
    }
  },[])
  
  return (
    <div className="App">
        {
          loginInfo.memID==null 
          ? 
          <>{/* 로그인 안했을 때 */}
            <ul className='list'>
              <li onClick={(e)=>{navigate('/join')}}>Join</li>
              <li onClick={(e)=>{navigate('/login')}}>Login</li>
            </ul> <br/>
          </> 
          : 
          <>{/* 로그인 했을 때 */}
          <span> {loginInfo.memName}님 반갑습니다.</span>
          <input type='button' value={'Logout'} className='btn' onClick={(e)=>{
            //세션스토리지에 저장된 로그인 정보를 제거
            window.sessionStorage.removeItem('logInfo');
            setLoginInfo({});
            alert('로그아웃')
            navigate('/')
          }}/>
          </>
        }
        
        

      <Routes>
        {/* 게시글 목록 페이지 */}
        <Route path='/' element={<Board loginInfo={loginInfo}/>}/>

        {/* 로그인 페이지 */}
        <Route path='/login' element={<Login setLoginInfo={setLoginInfo}/>}/>

        {/* 회원가입 페이지 */}
        <Route path='/join' element={<Join/>}/>

        {/* 상세페이지 */}
        <Route path='/detail/:boardNum' element={<Detail loginInfo={loginInfo}/>}/>

        {/* 글 작성 페이지 */}
        <Route path='/write' element={<Write loginInfo={loginInfo} />}/>
        
        {/* 글 수정 페이지 */}
        <Route path='/reviseForm/:boardNum' element={<ReviseForm/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
