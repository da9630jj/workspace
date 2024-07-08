//Viewer component
function Viewer(props){
  return(
    <div className='content'>
      <h3> 현재 카운터</h3>
      {props.cnt}
    </div>
  )
}

export default Viewer;