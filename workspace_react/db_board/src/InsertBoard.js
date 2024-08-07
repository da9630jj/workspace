import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardList from "./BoardList";

const InsertBoard=()=>{

  function write(){
    // let board={
    //  boardTitle:'테스트 제목',
    //  boardContent : '테스트 내용',
    //  boardWriter : '테스트 작성자'
    // }

    
    if(board.boardTitle==''){
      alert('제목은 필수 입력입니다.')
      return
    }
    if(document.querySelector('input[name="boardWriter"]').value==''){
      alert('작성자는 필수 입력입니다.')
      return
    }

    axios
    .post('/insert', board)
    .then((res)=>{
      alert('등록되었습니다.')
      navigate('/')
    })
    .catch((error=>{
      console.log(error)
    }))
  }

  const navigate = useNavigate();

  //입력한 내용을 저장하는 state 변수
  const [board, setBoard]=useState({
    boardTitle:'',
    boardWriter:'',
    boardContent:''
  })

  function upload(e){
    setBoard({
      ...board,
      [e.target.name]:e.target.value
    })
  }
  return(
    <>
      <table>
        <tr>
          <td>제목</td>
          <td><input className="inp"  type="text" name="boardTitle" onChange={(e)=>{
            upload(e)
          }}/></td>
        </tr>
        <tr>
          <td>작성자</td>
          <td><input  className="inp" type="text" name="boardWriter" onChange={(e)=>{
            upload(e)
          }}/></td>
        </tr>
        <tr>
          <td>내용</td>
          <td><textarea name="boardContent" onChange={(e)=>{
            upload(e)
          }}/></td>
        </tr>
      </table>
      <input className="btn-div" type="button" value={'뒤로가기'} onClick={(e)=>{
        navigate('/');
      }}/>
      <input className="btn-div" type="button" value={'글등록'} onClick={(e)=>{
        write();
      }}/>
    </>
  )

}
export default InsertBoard;