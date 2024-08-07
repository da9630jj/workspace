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
  function delBoard(){
    if(window.confirm('삭제할까요')){
      axios
      .delete(`/delBoard/${params.boardNum}`)
      .then((res)=>{
        setBoardList(res.data)
        alert('삭제되었습니다.');
        navigate('/');
      })
      .catch((error)=>{
        console.log(error)
        alert('게시글을 찾을 수 없습니다.')
      })
    }
    return
  }
    


  return(
    <>
      <table>
        <thead>
          <tr>
            <td>글번호</td>
            <td className="num">{boardList.boardNum}</td>
            <td>작성자</td>
            <td>{boardList.boardWriter}</td>
            <td>작성일</td>
            <td>{boardList.createDate}</td>
          </tr>
        </thead>
        <tr>
          <td>제목</td>
          <td colSpan={5}>{boardList.boardTitle}</td>
        </tr>
        <tr>
          <td>내용</td>
          <td colSpan={5}>{boardList.boardContent}</td>
        </tr>
      </table>
      <input className="btn-div" type="button" value={'뒤로가기'} onClick={(e)=>{
        navigate(-1)
      }}/>
      <input className="btn-div" type="button" value={'수정'} onClick={(e)=>{
        navigate(`/update/${params.boardNum}`);
      }}/>
      <input className="btn-div" type="button" value={'삭제'} onClick={(e)=>{
        delBoard();
      }}/>

    </>
  )

}
export default BoardDetail;