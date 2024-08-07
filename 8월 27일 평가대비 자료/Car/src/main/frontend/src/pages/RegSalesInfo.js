import React, { useEffect, useState } from 'react'
import axios from 'axios';
import * as salesApi from '../apis/salesApi'

const RegSalesInfo = () => {
  const [carNames, setCarNames] = useState([]);

  useEffect(()=>{
    salesApi.carModel()
    .then((res)=>{
      setCarNames(res.data)
      console.log(res.data)
    })
    .catch((error)=>{console.log(error)})
  },[])


  return (
    <div className='regsale'>
      <table className='reg'>
        <tbody>
          <tr>
            <td>구매자명</td>
            <td> <input type='text'/> </td>
          </tr>
          <tr>
            <td><span>색상</span>
              <select>
                <option> 블랙 </option>
                <option> 화이트 </option>
                <option> 실버 </option>
                <option> 레드 </option>
              </select> 
            </td>
            <td><span>모델</span>
              <select>
                <option>  </option>
              </select> 
            </td>
          </tr>
          <tr>
            <td>연락처</td>
            <td> <input type='text'/> </td>
          </tr>
        </tbody>
      </table>

      <input type='button' value={'등록'} className='btn2'/>
    </div>
  )
}

export default RegSalesInfo