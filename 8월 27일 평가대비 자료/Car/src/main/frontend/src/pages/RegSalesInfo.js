import React, { useEffect, useState } from 'react'
import axios from 'axios';
import * as salesApi from '../apis/salesApi'
import { regCar } from '../apis/carApi';
import { useNavigate } from 'react-router-dom';

const RegSalesInfo = () => {
  const [carNames, setCarNames] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    salesApi.carModel()
    .then((res)=>{
      console.log(res.data)
      setCarNames(res.data)
    })
    .catch((error)=>{console.log(error)})
  },[])

  const [saleValue, setSalevalue]=useState({
    buyer:'',
    color:'black',
    modelNum:1,
    buyerTelNum:''
  })
  function changeValue(e){
    setSalevalue({
      ...saleValue,
      [e.target.name]: e.target.value
    })
  }

  function regSale(){
    console.log(saleValue)
    
    if(saleValue.buyer==''){
      alert('구매자명을 입력하세요')
      return
    }

    if(window.confirm('등록하시겠습니까?')){
      alert('등록되었습니다.')
      salesApi.regsaleInfo(saleValue)
    .then((res)=>{
      console.log(res.data)
      navigate('/salesInfo')
    })
    .catch((error)=>{console.log(error)})
    }else{
      alert('취소하였습니다.')
    }
    

  }

  return (
    <div className='regsale'>
      <div className='regDiv'>
        <div>구매자명</div>
        <div> <input type='text' name='buyer' className='firIn' onChange={changeValue}/> </div>
      </div>
      <div className='regDiv'>
        <div>색상</div>
        <select name='color' onChange={changeValue}>
            <option value={'black'}>블랙</option>
            <option value={'white'}>화이트</option>
            <option value={'silver'}>실버</option>
            <option value={'red'}>레드</option>
          </select>
        <div className='model'>모델</div>
        <select name='modelNum' onChange={changeValue}>
          {
            carNames.length != 0
            ?
            carNames.map((carName, i)=>{
              return(
                <option key={i} value={carName.modelNum}> {carName.modelName} </option>
              )
            })
            :
            null
          }
        </select>
      </div>
      <div className='regDiv'>
        <div>연락처</div>
        <div> <input type='text' name='buyerTelNum' onChange={changeValue}/> </div>
      </div>
      <input type='button' value={'등록'} className='btn2' onClick={regSale}/>
    </div>
  )
}

export default RegSalesInfo