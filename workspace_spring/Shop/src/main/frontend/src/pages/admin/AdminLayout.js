import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState('itemManage');

  function drawSideMenu() {
    if (sideMenu === 'itemManage') {
      return (
        <div className='side-menu'>
          <ul>
            <li onClick={() => navigate('/admin')}>
              상품관리 <span><i className="bi bi-chevron-right"></i></span>
            </li>
            <li onClick={() => navigate('/admin/regItem')}>
              상품등록 <span><i className="bi bi-chevron-right"></i></span>
            </li>
            <li onClick={() => navigate('/admin/manageCate')}>
              카테고리관리 <span><i className="bi bi-chevron-right"></i></span>
            </li>
          </ul>
        </div>
      );
    }
    else if(sideMenu =='purManagement'){
      return(
        <div className='side-menu'>
          <ul>
            <li onClick={()=>{navigate('/admin/saleHistoryOfMonth')}}>이달의 구매내역 <span><i className="bi bi-chevron-right"></i></span> </li>
            <li onClick={()=>{navigate('/admin/')}}>구매정보검색 <span><i className="bi bi-chevron-right"></i></span></li>
          </ul>
        </div>
      )
    }
    else if(sideMenu =='userManagement'){
      return(
        <div className='side-menu'>
          <ul>
            <li onClick={()=>{navigate('/admin/searchUser')}}>유저 검색 <span><i className="bi bi-chevron-right"></i></span> </li>
            <li onClick={()=>{navigate('/admin/')}}>유저정보변경 <span><i className="bi bi-chevron-right"></i></span></li>
            <li onClick={()=>{navigate('/admin/')}}>탈퇴유저관리 <span><i className="bi bi-chevron-right"></i></span></li>
          </ul>
        </div>
      )
    }
    else if(sideMenu =='saleManagement'){
      return(
        <div className='side-menu'>
          <ul>
            <li onClick={()=>{navigate('/admin/recordOfMonth')}}>이달의 매출 <span><i className="bi bi-chevron-right"></i></span> </li>
            <li onClick={()=>{navigate('/admin/')}}>월별 매출 <span><i className="bi bi-chevron-right"></i></span></li>
            <li onClick={()=>{navigate('/admin/')}}>카테고리별 매출 <span><i className="bi bi-chevron-right"></i></span></li>
          </ul>
        </div>
      )
    }
  }

  return (
    <div className='admin-container'>
      {drawSideMenu()}
      <div className='reg'>
        <ul className='item-ul'>
          <li onClick={() => {
            setSideMenu('itemManage') 
            navigate('/admin')
          }}>상품관리</li>
          <li onClick={() => {
            setSideMenu('purManagement')
            navigate('/admin/saleHistoryOfMonth')
            }}>구매관리</li>
          <li onClick={() => {
            setSideMenu('userManagement') 
            navigate('/admin/searchUser')
            }}>유저관리</li>
          <li onClick={() => {
            setSideMenu('saleManagement')
            navigate('/admin/recordOfMonth')
            }}>매출관리</li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
