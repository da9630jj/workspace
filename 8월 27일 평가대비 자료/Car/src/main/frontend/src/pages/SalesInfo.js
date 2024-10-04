import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as salesApi from '../apis/salesApi'
import * as carApi from '../apis/carApi';

const SalesInfo = () => {
  const [sales, setSales] =useState([])

  useEffect(()=>{
    salesApi.selectSales()
    .then((res)=>{
      setSales(res.data)
      console.log(res.data)
    })
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
          {
            sales.map((sale, i)=>{
              return(
                <tr key={i}>
                  <td> {sale.salesNum} </td>
                  <td> {sale.buyer} </td>
                  <td> {sale.buyerTelNum} </td>
                  <td> {sale.salesDate} </td>
                  <td> {sale.color} </td>
                  <td> {sale.carInfoVO? sale.carInfoVO.modelName : null} </td>
                  <td> {sale.carInfoVO ? sale.carInfoVO.price : null} </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default SalesInfo