import React from 'react';
import './Task.css';

const Task = () => {
  return (
    <div className='task-contianer'>

      {/* 사이드 */}
      <div className='side-mainMenu'>
        {/* 기본 사이드 */}
        <div className='side-menusDiv'>
          <div className='side-div'>
            일정 추가
          </div>
          <div className='side-div'>
            검색
          </div>
          <div className='side-div'>
            캘린더
          </div>
          <div className='side-div'>
            오늘 일정
          </div>
          <div className='side-div'>
            내일 일정
          </div>
        </div>

        {/* 카테고리 사이드 */}
        <div className='side-menusDiv'>
          <div className='side-div'>
            검색
          </div>
          <div className='side-div'>
            캘린더
          </div>
          <div className='side-div'>
            오늘 할 일
          </div>
          <div className='side-div'>
            내일 할 일
          </div>
        </div>

      </div>

      {/* 메인 */}
      <div className='main-menu'>

      </div>
      
    </div>
  )
}

export default Task