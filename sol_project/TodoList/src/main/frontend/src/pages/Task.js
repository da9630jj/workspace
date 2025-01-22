import React, { useState } from 'react';
import './Task.css';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';

const Task = () => {
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(null);

  const [taskMenu, setTaskMenu] = useState([
    {
      title: '일정 추가',
      path: '/addTodo',
      
    },
    {
      title: '검색',
      path: '/searchTodo',
      
    },
    {
      title: '캘린더',
      path: '/calendar',
      
    },
    {
      title: '오늘 일정',
      path: '/todayTodo',
      
    },
    {
      title: '내일 일정',
      path: '/tmrwTodo',
      
    }
  ]);


  const clickMenu = (index, path) => {
    setIsShow(isShow === index ? null : index);
    if (path) {
      navigate(path); 
    }
  };
  
  return (
    <div className='task-contianer'>

      {/* 사이드 */}
      <div className='side-mainMenu'>
        {/* 기본 사이드 */}
        <div className='side-menusDiv'>
          

        {taskMenu.map((menu, i) => (
            <div
              key={i}
              className='side-div'
              onClick={() => clickMenu(i, menu.path)}
            >
              {menu.title}
            </div>
          ))}
          
        </div>

        {/* 카테고리 사이드 */}
        <div className='side-menusDiv'>
          
        </div>

      </div>

      {/* 메인 */}
      <div className='main-menu'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default Task