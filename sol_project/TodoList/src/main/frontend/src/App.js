import logo from './logo.svg';
import './reset.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Task from './pages/Task';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import AddTodo from './pages/AddTodo';
import SearchTodo from './pages/SearchTodo';
import TodayTodo from './pages/TodayTodo';
import TmrwTodo from './pages/TmrwTodo';
import { useEffect, useState } from 'react';

function App() {
  //로그인 정보를 저장할수 있는 state 변수
  const [loginInfo, setLoginInfo] = useState({});

  useEffect(() => {
    //세션에 저장된 로그인 정보 가져 옴
    const sessionLoginInfo = window.sessionStorage.getItem('loginInfo');
    
    //세션에 로그인 정보가 있으면...
    if(sessionLoginInfo != null){
      //1. 세션에서 가져온 데이터를 객체로 변환
      const obj_loginInfo = JSON.parse(sessionLoginInfo);
      
      //2. 로그인 정보를 loginInfo에 저장
      setLoginInfo(obj_loginInfo);
    }
  }, []);


  return (
    <div className="main-container">
      <h1 className='main-title'>
        Todo List
      </h1>
      <div className='main-content'>
        
        <Routes>
          <Route path='/login' element={<Login/>} />

        </Routes>


        <Routes>
          {/* main */}
          <Route path='/' element={<Task/>}>

          {/* side */}
          <Route path='/addTodo' element={<AddTodo/>}/>
          <Route path='searchTodo' element={<SearchTodo/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/todayTodo' element={<TodayTodo/>}/>
          <Route path='/tmrwTodo' element={<TmrwTodo/>}/>
        </Route>
          
          
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
