import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CartList = ({loginInfo}) => {
  const [carts, setCarts]=useState([])
  useEffect(()=>{
    if(loginInfo && loginInfo.memID){
      axios.get(`/item/selectCart/${loginInfo.memID}`)
      .then((res)=>{
        console.log(res.data)
        setCarts(res.data)
      })
      .catch((error)=>{console.log(error)})
    }
  },[loginInfo])

  console.log(carts)
  return (
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td> <input type='checkbox'/> </td>
            <td>상품 정보</td>
            <td>가격</td>
            <td>수량</td>
            <td>구매가격</td>
            <td>구매일시</td>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          {
            carts.length>0
            ?
            carts.map((cart, i)=>{
              return(
                <tr key={i}>
                  <td> {cart.cartCode} </td>
                  <td> <input type='checkbox'/> </td>
                  <td> {cart.itemList[0].itemName} </td>
                  <td> {cart.itemList[0].itemPrice} </td>
                  <td> <input type='number' value={cart.cartCnt}/></td>
                  <td> {cart.itemList[0].itemPrice*cart.cartCnt} </td>
                  <td> {cart.cartDate} </td>
                  <td> <button>삭제</button> </td>
                </tr>
              )
            })
            :
            <tr>
              <td colSpan={8}> 장바구니가 비어있습니다. </td>
            </tr>
          }
            
        </tbody>
      </table>
      <div className='right'>총 구매금액 ￦  </div>
      <div className='cartBtn'>
        <button> 선택삭제 </button>
        <button> 선택구매 </button>
      </div>
    </div>
  )
}

export default CartList