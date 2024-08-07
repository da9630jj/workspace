import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <ul className='item-ul'>
        <li>전체상품</li>
        <li>인터넷/IT</li>
        <li>소설</li>
        <li>자기계발</li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default UserLayout