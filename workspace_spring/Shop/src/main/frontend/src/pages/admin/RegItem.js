import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from '../../common/Modal_1';

const RegItem = () => {
  const [categories, setCategories]=useState([]);
  // 카테고리 목록 조회
  useEffect(()=>{
    axios.get('/admin/category')
    .then((res)=>{
      console.log(res.data)
      setCategories(res.data)
    })
    .catch((error)=>{console.log(error)})
  },[])

  const [regist, setRegist]=useState({
    cateCode:2,
    itemName:'',
    itemPrice:0,
    itemIntro:''
  })
  function changeValue(e){
    setRegist({
      ...regist,
      [e.target.name]: e.target.value
    })
  }

  const [successReg, setSuccessReg] = useState(false)
  function clickReg(){
    axios.post('/item/insertItem', regist)
    .then((res)=>{
      setSuccessReg(true)
    })
    .catch((error)=>{console.log(error)})
  }

  return (
    <div className='reg'>
      <table className='regItem'>
        <tbody>
          <tr>
            <td>상품 카테고리</td>
          </tr>
          <tr>
            <td>
              <select name='cateCode' onChange={changeValue}>
                {
                  categories.map((category,i)=>{
                    return(
                      <option key={i} value={category.cateCode}>
                        {category.cateName}
                      </option>
                    )
                  })
                }
              </select>
            </td>
          </tr>
          <tr>
            <td>상품명</td>
          </tr>
          <tr>
            <td> <input type='text' name='itemName' onChange={changeValue}/> </td>
          </tr>
          <tr>
            <td>상품 가격</td>
          </tr>
          <tr>
            <td> <input type='text' name='itemPrice' onChange={changeValue}/> </td>
          </tr>
          <tr>
            <td>상품 소개</td>
          </tr>
          <tr>
            <td> <input type='text' name='itemIntro' className='intro' onChange={changeValue}/> </td>
          </tr>
        </tbody>
      </table>
      <button onClick={clickReg}>상품 등록</button>

    {
      successReg
      ?
      <Modal content={()=>{
        return(
          <div>상품을 등록했습니다.</div>
        )
      }}
      setIsShow={setSuccessReg}
      clickCloseBtn={()=>{}}/>
      :
      null
    }
    </div>
    
  )
}

export default RegItem