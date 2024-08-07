import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();


  const [productList, setProductList]=useState([]);

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

  // ----------------------------------------------------

  const {itemNum}= useParams()

  //빈 객체 만들기
  const [revises, setRevises] = useState({
    itemNum:'',
    itemName: '',
    seller:'',
    regDate:'',
    itemPrice: '',
    itemIntro: ''
  })

  // 저장된 상품정보 들고오기
  useEffect(()=>{
    axios
    .get(`/detail/${itemNum}`)
    .then((res)=>{
      console.log(res.data)
      const{itemNum,itemName,seller, regDate,itemPrice, itemIntro} = res.data
      setRevises({
        itemNum: itemNum ,
        itemName: itemName ,
        seller: seller ,
        regDate: regDate ,
        itemPrice: itemPrice ,
        itemIntro: itemIntro
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  //수정
  function putValue(e){
    setRevises({
      ...revises,
      [e.target.name]: e.target.value
    })
  }

  function goRevise(){
    if(revises.itemName==''){
      alert('상품명을 입력하세요')
      return
    }
    if(revises.itemPrice==''){
      alert('상품가격을 입력하세요')
      return
    }

    axios
    .put(`/updateProduct/${itemNum}`, revises)
    .then((res)=>{
      alert('수정되었습니다.')
      console.log(res.data)
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })

  }

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
                      if(product.itemNum==revises.itemNum){
                        navigate('/')
                      }else{
                        navigate(`/detail/${product.itemNum}`)
                      }
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
      
      {/* ---------------------------------------------------------- */}
      <div>
        <div className='cnt'>상품 상세 정보</div>
        <table className='detail'>
          <tbody>
            <tr>
              <td>상품번호</td>
              <td> <input type='text' name='itemNum' readOnly className='ppp' value={revises.itemNum}/> </td>
            </tr>
            <tr>
              <td>상품명</td>
              <td> <input type='text' name='itemName' onChange={(e)=>{putValue(e)}} placeholder={revises.itemName}/> </td>
            </tr>
            <tr>
              <td>상품가격</td>
              <td> <input type='text' name='itemPrice' onChange={(e)=>{putValue(e)}} placeholder={revises.itemPrice}/> </td>
            </tr>
            <tr>
              <td>판매자</td>
              <td> <input type='text' name='seller' readOnly className='ppp' value={revises.seller} placeholder={revises.itemName}/> </td>
            </tr>
            <tr>
              <td>판매시작일</td>
              <td> <input type='text' name='regDate' readOnly className='ppp' value={revises.regDate}/> </td>
            </tr>
            <tr>
              <td>상품 설명</td>
              <td> <textarea name='itemIntro' onChange={(e)=>{putValue(e)}} placeholder={revises.itemIntro}/> </td>
            </tr>
          </tbody>
        </table>
        <button type='button' onClick={(e)=>{
          goRevise()
          }}>수정</button>
        
      </div>
    </div>
  )
}

export default Detail