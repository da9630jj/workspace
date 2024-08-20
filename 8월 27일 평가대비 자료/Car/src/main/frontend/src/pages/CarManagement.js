import axios from 'axios'
import React, { useEffect, useState } from 'react'
import * as carApi from '../apis/carApi'

const CarManagement = () => {

  // 차량 리스트 빈 객체
  const [carlist, setCarList] = useState([])

  // 차량 리스트 가져오기
  useEffect(()=>{
    carApi.carList()
    .then((res)=>{
      setCarList(res.data)
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  // 차량 등록할 빈 객체
  const [car, setCar] = useState({
    company: '현대',
    modelName : '',
    price :0
  })

  // 차량 데이터 넣기
  function reg(e){
    setCar({
      ...car,
      [e.target.name]: e.target.value
    })
  }
  
  // 차량 등록하기
  function insertCar(){
    carApi.regCar(car)
    .then((res)=>{
      console.log(res.data)
      window.location.reload()
    })
    .catch((error)=>{console.log(error)})
  }

  return (
    <div className='header'>
      <div className='management'>
        <div>차량 등록</div>

        <div className='selectManage'>
            <div>
              제조사 
              <select name='company' onChange={(e)=>{reg(e)}}>
                <option value={'현대'}>현대</option>
                <option value={'기아'}>기아</option>
                <option value={'쌍용'}>쌍용</option>
              </select> 
            </div>
            <div>
              모델명
              <input type='text' name='modelName' onChange={(e)=>{reg(e)}}/>
            </div>
            <div>
              차량가격
              <input type='text' name='price' onChange={(e)=>{reg(e)}}/>
            </div>
        </div>
        <div className='btnDiv'><input type='button' value={'등록'} className='btn' onClick={(e)=>{insertCar()}}/></div>
      </div>

      <div className='carList'>
        <div>차량 목록</div>
        <table className='manageTable'>
          <thead>
            <tr>
              <td>모델번호</td>
              <td>모델명</td>
              <td>제조사</td>
            </tr>
          </thead>
          <tbody>
            {
              carlist.map((car, i)=>{
                return(
                  <tr key={i}>
                    <td> {car.modelNum} </td>
                    <td> {car.modelName} </td>
                    <td> {car.company} </td>
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

export default CarManagement