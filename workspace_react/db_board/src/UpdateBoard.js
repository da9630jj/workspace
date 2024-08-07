import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateBoard=()=>{
  const params = useParams();
  const [board, setBoard]= useState({
    boardTitle: '',
    boardContent: ''
  });

  axios
  .put(`/update/${params.boardNum}`, board)
  .then((res)=>{

  })
  .catch((error)=>{

  })

  return(
    <>
      <table>
        <thead>
            <tr>
              <td>글번호</td>
              <td className="num">{params.boardNum}</td>
              <td>작성자</td>
              <td>{board.boardWriter}</td>
              <td>작성일</td>
              <td>{board.createDate}</td>
            </tr>
          </thead>
          <tr>
            <td>제목</td>
            <td colSpan={5}></td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={5}></td>
          </tr>
      </table>
    </>
  )

}
export default UpdateBoard;