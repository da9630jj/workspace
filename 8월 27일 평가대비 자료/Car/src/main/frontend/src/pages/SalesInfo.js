import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as salesApi from '../apis/salesApi'
import * as carApi from '../apis/carApi';

const SalesInfo = () => {
  const [cars, setCars] =useState([])
  const [sales, setSales] =useState([])

  useEffect(()=>{
    axios.all([carApi.carList(), salesApi.selectSales()])
    .then(axios.spread((res1, res2)=>{
      setCars(res1)
      setSales(res2)
    }))
    .catch((error)=>{console.log(error)})
  },[])



  return (
    <div className='salesInfo'>
      <table>
        <colgroup>
          <col width='7%'/>
        </colgroup>
        <thead>
          <tr>
            <td rowSpan={2}>NO</td>
            <td colSpan={4}>구매자 정보</td>
            <td colSpan={2}>차량 정보</td>
          </tr>
          <tr> 
            <td>구매자명</td>
            <td>연락처</td>
            <td>구매일</td>
            <td>색상</td>
            <td>모델명</td>
            <td>금액</td>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

    </div>
  )
}

export default SalesInfo