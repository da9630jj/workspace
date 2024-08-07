import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className='item-ul'>
        <li onClick={()=>{navigate('/admin/itemManagement')}}>상품관리</li>
        <li>구매관리</li>
        <li>유저관리</li>
        <li>매출관리</li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default AdminLayout