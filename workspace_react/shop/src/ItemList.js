import Item from "./Item";

const ItemList=({item_list})=>{
  return(
    <div className='content'>
      {
        item_list.map((item, i)=>{
          return (
            <Item item={item} key={i}/>
          )
        })
      }
    </div>
  
  ) 
}

export default ItemList;