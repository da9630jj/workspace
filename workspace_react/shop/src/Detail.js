import { useParams } from 'react-router-dom';
import './Detail.css';
import Item from './Item';

const Detail=({item_list})=>{
  //url로 전달되는 데이터 받기
  //1번
  // const params = useParams();
  // console.log(params)
  // console.log(params.id)
  //2번
  const {id}=useParams();

  return(
    <>
      {
        item_list.map((item, i)=>{
          if(id==item.itemNum){
            return(
              <div>
                <div className="item-info">
                  <img src={process.env.PUBLIC_URL+'/'+item.imgName}/>
          
                  <div>
                    <h4>{item.itemName}</h4>
                    <p>{item.price}</p>
                    <input type="button" value={'주문하기'}/>
                  </div>
                </div>
          
                <div className='intro'>
                  {item.intro}
                </div>
              </div>
            )
          }
        })
      }
      

    </>
  )
}
export default Detail;
