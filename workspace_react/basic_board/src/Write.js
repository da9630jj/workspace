import { useNavigate, useParams } from "react-router-dom";
import "./Write.css"
import { useState } from "react";

const Write=({board_list, setBoardList})=>{


  const navigate = useNavigate();
  const [board, setBoard]=useState({
    boardNum: 0,
    title: '',
    writer:'',
    createDate:'',
    content:''
  });

  function upLoadBoard(e){
    setBoard({
      ...board,
      [e.target.name]:e.target.value
    })
  }



  return(
    <div className="wr">
      <table>
        <tbody>
        <tr>
          <td>글번호</td>
          <td><input type="text" name="boardNum" onChange={(e)=>{
            upLoadBoard(e)
          }}/></td>
        </tr>
        <tr>
          <td>제목</td>
          <td><input type="text" name="title"onChange={(e)=>{
            upLoadBoard(e)
          }}/></td>
        </tr>
        <tr>
          <td>작성자</td>
          <td><input type="text" name="writer"onChange={(e)=>{
            upLoadBoard(e)
          }}/></td>
        </tr>
        <tr>
          <td>작성일</td>
          <td><input type="date" name="createDate"onChange={(e)=>{
            upLoadBoard(e)
          }}/></td>
        </tr>
        <tr>
          <td>내용</td>
          <td><textarea name="content" rows={5}onChange={(e)=>{
            upLoadBoard(e)
          }}/></td>
        </tr>
        </tbody>
      </table>

      <input type="button" value={'글등록'} className="but" onClick={(e)=>{
        setBoardList([...board_list, board])
        navigate('/');
      }}/>

    </div>



  )

}
export default Write;