import axios from 'axios'
import React, { useEffect, useState } from 'react'

const OrderList = () => {
  const [ordersList, setOrdersList]=useState([])

  useEffect(()=>{
    axios
    .get('/orderList')
    .then((res)=>{
      console.log(res.data)
      setOrdersList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div className='orderList'>
      <div className='cnt'>총 {ordersList.length}건의 주문정보가 검색되었습니다</div>
      
      <table>
        <thead>
          <tr>
            <td>NO</td>
            <td>상품명</td>
            <td>상품단가</td>
            <td>구매수량</td>
            <td>구매가격</td>
            <td>주문자</td>
            <td>주문일</td>
          </tr>
        </thead>
        <tbody>
          {
            ordersList.map((order, i)=>{
              return(
                <tr key={i}>
                  <td> {order.orderNum} </td>
                  <td> {order.buyItemName} </td>
                  <td> ₩{order.buyItemPrice} </td>
                  <td> {order.buyCNT} </td>
                  <td> ₩{order.buyPrice} </td>
                  <td> {order.buyer} </td>
                  <td> {order.buyDate} </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrderList