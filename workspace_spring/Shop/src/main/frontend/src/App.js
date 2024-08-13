import './App.css';
import './reset.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
import Join from './pages/user/Join';
import Login from './pages/user/Login';

import { useEffect, useState } from 'react';
import RegItem from './pages/admin/RegItem';
import ManageItem from './pages/admin/ManageItem';
import ManageCate from './pages/admin/ManageCate';
import ItemList from './pages/user/ItemList';
import ItemDetail from './pages/user/ItemDetail';
import SaleHistoryOfMonth from './pages/admin/SaleHistoryOfMonth';
import SearchUser from './pages/admin/SearchUser';
import RecordOfMonth from './pages/admin/RecordOfMonth';

// 새로고침과 재랜더링은 다르다
// 새로고침하면 state 변수의 값이 전부 초기화 된다.
// 재랜더링하면 state 변수의 값은 보존된다.
function App() {
  const naviagate= useNavigate();
  //로그인 정보를 저장할 수 있는 state 변수
  const [loginInfo, setLoginInfo] = useState({});
  //로그인 성공 시 loginInfo에 로그인 정보를 저장하지만 새로고침하면 App.js 다시 시작하면서 loginInfo 변수의 값이 초기화된다.
  //새로고침을 하더라도 sessionStorage에 로그인 정보는 존재하니, 새로고침 할대 만약 로그인 정보가 sessionStorage에 남아있다면 loginInfo state변수에 로그인 정보를 저장시켜야함.

  //App.js가 mount(새로고침) 되면 실행
  useEffect(()=>{
    //세션에 저장된 로그인 정보 가져 옴
    const loginDataString = window.sessionStorage.getItem('logInfo')
    //세션에 로그인 정보가 있으면..
    if(loginDataString != null){
      //로그인 정보를 loginInfo에 저장
      const loginData = JSON.parse(loginDataString);
      setLoginInfo(loginData)
    }
  },[])

  //빈 객체인지 확인하는 코드
  //Object.keys() -> 객체 안의 모든 키 값을 가져옴
  console.log(Object.keys(loginInfo));

  
  return (
    <div className="container">
      <div className='login-div'>
        {
          Object.keys(loginInfo).length==0
          ?
          <div>
            <p onClick={()=>{naviagate('/loginForm')}}>Login</p>
            <p onClick={()=>{naviagate('/join')}}>Join</p>
          </div>
          :
          <div>
            <p onClick={()=>{
              if(loginInfo.memRole=='ADMIN'){
                naviagate('/admin')
              }else{naviagate('/')}
            }}> {loginInfo.memID}님 반갑습니다. </p>
            <p onClick={(e)=>{
              window.sessionStorage.removeItem('logInfo');
              setLoginInfo({});
              alert('로그아웃')
              naviagate('/')
            }}> Logout </p>
          </div>
        }
        
        <div className='banner'>
          <div>
            <img className='banner-img' src='http://localhost:8080/images/book_banner.PNG'/>
          </div>
          <div className='title-div' onClick={()=>{naviagate('/')}}>
            Book Shop
          </div>
        </div>
        
      </div>
      <div className='layout-div'>
        <Routes>
          {/* 유저용 */}
          <Route path='/' element={<UserLayout/>}>
            <Route path='' element={<ItemList/>}/>
            <Route path='itemDetail/:itemCode' element={<ItemDetail/>}/>
          </Route>

          <Route path='/join' element={<Join/>}/>
          <Route path='/loginForm' element={<Login setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>}/>

          {/* 관리자용 */}
          <Route path='/admin' element={<AdminLayout/>}>

            <Route path='' element={<ManageItem/>}/>
            <Route path='regItem' element={<RegItem/>}/>
            <Route path='manageCate' element={<ManageCate/>}/>
            <Route path='saleHistoryOfMonth' element={<SaleHistoryOfMonth/>}/>
            <Route path='searchUser' element={<SearchUser/>}/>
            <Route path='recordOfMonth' element={<RecordOfMonth/>}/>


          </Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
