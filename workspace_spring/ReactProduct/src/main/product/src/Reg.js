import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reg = () => {
  const navigate=useNavigate();

  const [regItem, setRegItem]=useState({
    itemName: '',
    itemPrice: '',
    seller: '',
    itemIntro: ''
  })

  function registProduct(){
    if(regItem.itemName==''){
      alert('상품명을 입력하세요')
      return
    }
    if(regItem.itemPrice==''){
      alert('상품가격을 입력하세요')
      return
    }
    if(regItem.seller==''){
      alert('판매자를 입력하세요')
      return
    }

    axios
    .post('/reg', regItem)
    .then((res)=>{
      console.log(res.data)
      alert('상품이 등록되었습니다')
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  

  function regist(e){
    setRegItem({
      ...regItem,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className='reg'>
      <table>
        <tbody>
          <tr>
            <td>상품명</td>
            <td> <input type='text' name='itemName' onChange={(e)=>{
              regist(e)
            }}/> </td>
          </tr>
          <tr>
            <td>상품가격</td>
            <td> <input type='text' name='itemPrice' onChange={(e)=>{
              regist(e)
            }}/> </td>
          </tr>
          <tr>
            <td>판매자</td>
            <td> <input type='text' name='seller' onChange={(e)=>{regist(e)}}/> </td>
            
          </tr>
          <tr>
            <td>상품 설명</td>
            <td> <textarea name='itemIntro' onChange={(e)=>{regist(e)}}/> </td>
          </tr>
        </tbody>
      </table>
      <button type='button' onClick={(e)=>{
        registProduct();
      }}>등록</button>
    </div>
  )
}

export default Reg