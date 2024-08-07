import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Order = () => {

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios
    .get('/order')
    .then((res)=>{
      console.log(res.data)
      setOrders(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  const [order, setOrder]=useState({
    buyItemName:'',
    buyer:'',
    buyCNT: ''
  })

  function goOrder(e){
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    })
  }

  function clickOrder(){
    axios
    .put(`/goOrder`, order)
    .then((res)=>{console.log(res)})
    .catch((error)=>{console.log(error)})
  }
  

  return (
    <div className='reg'>
      <table>
        <tbody>
          <tr>
            <td>주문상품</td>
            <td> 
              <select name='buyItemName' onChange={(e)=>{goOrder(e)}}> 
            {
              orders.map((order, i)=>{
                return(
                  <option key={i}> {order.itemName} </option>
                )
              })
            }
              </select>
            </td>

          </tr>
          <tr>
            <td>상품단가</td>
            <td> <input type='text' name='itemPrice' readOnly className='ppp'/> </td>

          </tr>
          <tr>
            <td>주문자</td>
            <td> <input type='text' name='buyer' onChange={(e)=>{goOrder(e)}}/> </td>
          </tr>
          <tr>
            <td>주문 수량</td>
            <td> <input type='number' name='buyCNT' onChange={(e)=>{goOrder(e)}}/> </td>
          </tr>
        </tbody>
      </table>
      <button type='button' onClick={(e)=>{
        navigate('/orderList')
      }}>주문하기</button>
    </div>
  )
}

export default Order