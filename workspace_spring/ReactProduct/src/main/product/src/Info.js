import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Detail from './Detail'
import axios from 'axios'

const Info = () => {
  const [productList, setProductList]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios
    .get('/list')
    .then((res)=>{
      console.log(res.data)
      setProductList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div className='infoDisplay'>
      <div>
        <div className='cnt'>총 {productList.length}개의상품이 등록되었습니다.
        </div>

        <table className='infoTable'>
          <thead>
            <tr>
              <td>No</td>
              <td>상품명</td>
              <td>상품가격</td>
              <td>판매자</td>
            </tr>
          </thead>

          <tbody>
            {
              productList.map((product, i)=>{
                return(
                  <tr key={i}>
                    <td> {product.itemNum} </td>
                    <td className='cur' onClick={(e)=>{
                      navigate(`/detail/${product.itemNum}`)
                    }}> {product.itemName} </td>
                    <td> {product.itemPrice} </td>
                    <td> {product.seller} </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Info