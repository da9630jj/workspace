import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    axios.get('/item/selectItem')
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  console.log(items)

  return (
    <div className='item-list'>
      {
      items.map((item, i) => {
        return(
          <div key={i} className='item-div' >
            <img src={`http://localhost:8080/upload/${item.imgList[0].attachedFileName}`}  onClick={()=>{navigate(`/itemDetail/${item.itemCode}`)}}/>
            <h4>{item.itemName}</h4>
            <p>{'￦'+item.itemPrice.toLocaleString()}</p>
          </div>
        )
        })
      }
    </div>
  );
};

export default ItemList;
