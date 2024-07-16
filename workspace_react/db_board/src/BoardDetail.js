import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardDetail=()=>{
  //route의 url로 전달되는 데이터 받기
  const params=useParams();
  console.log(params); //{boardNum: '1'}

  const [boardList, setBoardList]=useState([]);

  //DB에서 상세 조회한 내용을 화면에 출력
  useEffect(()=>{
    axios
    .get(`/boardDetail/${params.boardNum}`)
    .then((res)=>{
      console.log(res.data)
      setBoardList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  const navigate = useNavigate();
    


  return(
    <>
      <table>
        <tr>
          <td>글번호</td>
          <td>{boardList.boardNum}</td>
          <td>작성자</td>
          <td>{boardList.boardWriter}</td>
          <td>작성일</td>
          <td>{boardList.createDate}</td>
        </tr>
        <tr>
          <td>제목</td>
          <td>{boardList.boardTitle}</td>
        </tr>
        <tr>
          <td>내용</td>
          <td>{boardList.boardContent}</td>
        </tr>
      </table>
      <input type="button" value={'뒤로가기'} onClick={(e)=>{
        navigate(-1)
      }}/>
      <input type="button" value={'삭제'} onClick={(e)=>{
        
      }}/>

    </>
  )

}
export default BoardDetail;