import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ItemManagement = () => {
  const naviagate=useNavigate()
  return (
    <div className='side-menu'>
      <ul>
        <li onClick={()=>{naviagate('/admin/itemManagement/manageItem')}}>상품관리</li>
        <li onClick={()=>{naviagate('/admin/itemManagement/regItem')}}>상품등록</li>
        <li>카테고리관리</li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default ItemManagement