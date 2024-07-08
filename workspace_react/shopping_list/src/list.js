function List(props){
  return(
    <div className="content">
        <h3>장보기 목록</h3>
        {
          props.list.map((item, i)=>{
            return(
              <div key={i} className="item-div">
                <span className="item">{item}</span> 
                <input type='button' value={'삭제'} onClick={(e)=>{
                  // const copyList = [...props.list]
                  // copyList.splice(i, 1);
                  // props.setList(copyList);

                  props.list.splice(i,1);
                  props.setList([...props.list]);

                }} />
              </div>
            );
          })
        }
      
      </div>
  )
}
export default List;