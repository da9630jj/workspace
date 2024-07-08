function Controller(props){
  return(
    <div className='content'>
      <input type='button' value={-10} onClick={(e)=>{
        props.changeCnt(e.target.value)
      }}/>
      <input type='button' value={-1} onClick={(e)=>{
        props.changeCnt(e.target.value)}}/>    
      <input type='button' value={'+'+1} onClick={(e)=>{
        props.changeCnt(e.target.value)}}/>
      <input type='button' value={'+'+10} onClick={(e)=>{
        props.changeCnt(e.target.value)
        }}/>
    </div>
  )
}
export default Controller;