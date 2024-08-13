import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const {itemCode}=useParams();
  const [item, setItem]=useState({});

  useEffect(()=>{
    axios.get(`/item/itemDetail/${itemCode}`)
    .then((res)=>{setItem(res.data)
      console.log(res.data)
    })
    .catch((error)=>{console.log(error)})
  },[])


  return (
    <div className='Detailcontainer'>
      <div className='itemDetail'>
        <div className='mainImg'>
        {item.imgList && item.imgList.length > 0 ? 
                  <img src={`http://localhost:8080/upload/${item.imgList[0].attachedFileName}`}/> : null} 
        </div>
          <div className='detailSide'>
            <div>상품명: {item.itemName} </div>
            <div>가격: {item.itemPrice} </div>
            <div>수량: <input type='number'/> </div>
            <div>총가격:</div>
            <div> 
              <button>구매하기</button>
              <button>장바구니에 담기</button> 
            </div>
          </div>
      </div>
      <div className='detailBottom'>
        <div>{item.itemIntro}</div>
        {item.imgList && item.imgList.length >0 && <img src={`http://localhost:8080/upload/${item.imgList[1].attachedFileName}`}/>}
      </div>
    </div>
  )
}

export default ItemDetail