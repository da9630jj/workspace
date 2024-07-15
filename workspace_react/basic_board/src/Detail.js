import { useNavigate, useParams } from "react-router-dom";
import "./Detail.css"

const Detail=({board_list, setBoardList})=>{
  const {id}=useParams();
  const navigate = useNavigate();

  return(
    <div className="detail">
      {
        board_list.map((list, i) => {
          console.log(list)
          if(id==list.boardNum){
            return(
              <div>
                <table>
                  <tr>
                    <td>글번호</td>
                    <td>{list.boardNum}</td>
                    <td>작성자</td>
                    <td>{list.writer}</td>
                    <td>작성일</td>
                    <td>{list.createDate}</td>
                  </tr>
                  <tr>
                    <td>제목</td>
                    <td colSpan={5}>{list.title}</td>
                  </tr>
                  <tr className="content">
                    <td>내용</td>
                    <td colSpan={5}>{list.content}</td>
                  </tr>
                </table>
                <input className="but" type="button" value={'뒤로가기'} onClick={(e)=>{
                  navigate(-1);
                }}/>
                <input className="but" type="button" value={'삭제'} onClick={(e)=>{
                  alert("삭제하시겠습니까?")
                  if(true){
                    board_list.splice(list,1)
                    setBoardList([...list])
                    navigate('/')
                  }
                }}/>
              </div>

            )
          } 
        })
      }
    </div>
  )

}
export default Detail;