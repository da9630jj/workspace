import { useState } from "react";

function Add(props){
  //input 태그의 데이터를 저장할 변수
  let [text, setText] = useState('');

  return(
    <div className='content'>
      <input type='text' className='plus' onChange={(e)=>{
        setText(e.target.value);
      }}/>

      <input type='button' value={'추가'} onClick={(e)=>{
        //input 태그에 입력한 내용을 가져온다.
        //가져온 내용을 list에 추가한다.
        props.list.push(text);
        console.log(props.list);
        //변경된 list의 내용으로 setList 함수를 호출
        props.setList([...props.list]);
      }}/>

    </div>
  )
}

export default Add;