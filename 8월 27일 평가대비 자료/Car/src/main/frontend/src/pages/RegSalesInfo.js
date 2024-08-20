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
      <div className='regDiv'>
        <div>구매자명</div>
        <div> <input type='text' className='firIn'/> </div>
      </div>
      <div className='regDiv'>
        <div>색상</div>
        <select>
            <option>블랙</option>
            <option>화이트</option>
            <option>실버</option>
            <option>레드</option>
          </select>
        <div className='model'>모델</div>
        <select>
          <option>블랙</option>
        </select>
      </div>
      <div className='regDiv'>
        <div>연락처</div>
        <div> <input type='text'/> </div>
      </div>
      <input type='button' value={'등록'} className='btn2'/>
    </div>
  )
}

export default RegSalesInfo