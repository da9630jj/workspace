import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardList from "./BoardList";

const InsertBoard=()=>{
  useEffect(()=>{
    axios
    .post('/insert')
    .then((res)=>{
      
      console.log(res)
    })
    .catch((error=>{
      console.log(error)
    }))
  })

  const navigate = useNavigate();
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
          <td><input type="text" name="boardTitle" onChange={(e)=>{
            upload(e)
          }}/></td>
        </tr>
        <tr>
          <td>작성자</td>
          <td><input type="text" name="boardWriter" onChange={(e)=>{
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
      <input type="button" value={'글등록'} onClick={(e)=>{
        navigate('/boardList')
      }}/>
    </>
  )

}
export default InsertBoard;