import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardList = () => {

  //게시글 목록을 저장할 state 변수
  const [boardList, setBoardList] = useState([]);
  //게시글 목록 조회
  useEffect(()=>{
    axios
    .get('/boardList')
    .then((res)=>{
      console.log(res.data)
      setBoardList(res.data)
    })
    .catch((error)=>{
      alert('오류발생!!\n개발자 모드로 콘솔 확인하세요')
      console.log(error)
    })
  },[]);
  const navigate = useNavigate();
  

  return(
    <>
      <table>
        <thead>
          <tr>
            <td>글번호</td>
            <td>제 목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>
        </thead>
        <tbody>
          {
            boardList.map((board, i)=>{
              return(
                <tr>
                  <td>{board.boardNum}</td>
                  <td onClick={(e)=>{
                    navigate(`/detail/${board.boardNum}`);
                  }}>{board.boardTitle}</td>
                  <td>{board.boardWriter}</td>
                  <td>{board.createDate}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <input type="button" value={'글등록'} onClick={(e)=>{
        navigate('/insertBoard')
      }}/>
    </>
  )
}

export default BoardList;