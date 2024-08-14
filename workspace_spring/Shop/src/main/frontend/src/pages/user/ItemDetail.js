import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ItemDetail = ({loginInfo}) => {
  const {itemCode}=useParams();
  const [item, setItem]=useState({});
  const navigate = useNavigate();
  const[cart, setCart]= useState({})

  useEffect(()=>{
    axios.get(`/item/itemDetail/${itemCode}`)
    .then((res)=>{setItem(res.data)
      console.log(res.data)
      setCart({
        itemCode:res.data.itemCode,
        cartCnt:count.cnt,
        memID:loginInfo.memID
      })
    })
    .catch((error)=>{console.log(error)})
  },[])

  console.log(cart)
  // 총가격
  const [count, setCount] = useState({
    cnt:1,
  })
  function changeCount(e){
    setCount({
      ...count,
      [e.target.name]: e.target.value
    })
  }

  //장바구니
  useEffect(()=>{
    if(item.itemCode && loginInfo.memID){
      setCart({
        itemCode: item.itemCode,
        cartCnt:count.cnt,
        memID:loginInfo.memID
      })
    }
  },[item, count.cnt,loginInfo.memID])

  function insertCart(){
    axios.post('/item/insertCart', cart)
    .then((res)=>{
      if(window.confirm('장바구니로 이동하겠습니까?')){
        navigate(`/cartList/${loginInfo.memID}`)
      }
    })
    .catch((error)=>{console.log(error)})
  }
  
  return (
    <div className='Detailcontainer'>
      <div className='itemDetail'>
        <div className='mainImg'>
        {item.imgList && item.imgList.length > 0 ? 
                  <img src={`http://localhost:8080/upload/${item.imgList[0].attachedFileName}`}/> : null} 
        </div>
          <div className='detailSide'>
            <div>상품명: {item.itemName} </div>
            <div>가격: ￦ {item.itemPrice ? (item.itemPrice).toLocaleString(): null} </div>
            <div>수량: <input type='number' name='cnt' onChange={changeCount} value={count.cnt}/> </div>
            <div>총가격: ￦ {(item.itemPrice*count.cnt).toLocaleString()} </div>
            <div> 
              <button>구매하기</button>
              <button onClick={insertCart}>장바구니에 담기</button> 
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