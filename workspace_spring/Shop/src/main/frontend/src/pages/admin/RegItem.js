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
    cateCode:1,
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

  //첨부파일을 저장할 state
  const [mainImg, setMainImg] = useState(null);
  const [subImg, setSubImg] = useState(null);

  function clickReg(){
    //axios 통신으로 자바로 갈 때 첨부파일이 있으면 반드시 아래의 설정코드를 axios에 추가
    const fileConfig={headers:{'Content-Type':'multipart/form-data'}}

    //위의 설정코드를 axios 통신할 때 추가하면 자바로 넘어가는 데이터를 전달하는 방식이 달라짐
    //첨부파일이 있는 데이터를 자바로 전달하기 위해서는 form태그를 사용해서 전달

    //1. form 객체 생성
    const itemForm = new FormData();

    //2. form 객체에 데이터 추가
    // itemForm.append('itemName', '상품1');
    // itemForm.append('itemPrice', 10000);

    itemForm.append('itemName', regist.itemName);
    itemForm.append('itemPrice', regist.itemPrice);
    itemForm.append('itemIntro', regist.itemIntro);
    itemForm.append('cateCode', regist.cateCode);
    itemForm.append('mainImg', mainImg);
    itemForm.append('subImg', subImg);

    //3. 데이터를 가진 form 객체를 axios 통신에서 자바로 전달한다.
    // axios.post('/item/insertItem', regist, fileConfig)
    axios.post('/admin/insertItem', itemForm, fileConfig)
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
          <tr>
            <td> <input type='file' className='file' onChange={(e)=>{
              //선택한 파일 정보
              console.log(e.target.files[0]);
              setMainImg(e.target.files[0]);
            }} /> </td>
          </tr>
          <tr>
            <td> <input type='file' className='file' onChange={(e)=>{
              setSubImg(e.target.files[0]);
            }}/> </td>
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