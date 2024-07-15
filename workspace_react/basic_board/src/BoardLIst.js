import { useNavigate } from "react-router-dom";
import "./BoardList.css";
import { useState } from "react";
import Write from "./Write";

const BoardList=({board_list})=>{
  const navigate = useNavigate();
  
  return(
    <div className="boardList">
      <table>
        <thead>
          <tr>
            <td>글번호</td>
            <td >제목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>
        </thead>
  
        <tbody>
            {
              board_list.map((list, i)=>{
                return(
                  <tr key={i}>
                    <td>{list.boardNum}</td>
                    <td onClick={(e)=>{
                      navigate(`/detail/${list.boardNum}`)
                    }}>{list.title}</td>
                    <td>{list.writer}</td>
                    <td>{list.createDate}</td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>

      <input className="but" type="button" value={'글쓰기'} onClick={(e)=>{
        navigate(`/write`)
      }}/>
    </div>
    
  )
}
export default BoardList;