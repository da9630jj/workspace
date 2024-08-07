import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as boardApi from '../apis/boardApi'
import * as replyApi from '../apis/replyApi'

const Detail = ({loginInfo}) => {
  
  const navigate = useNavigate()
  const {boardNum} = useParams()

  //세부사항 가져오기
  const [board, setBoard] =useState({})

  // 댓글 목록 가져오기
  const [replys, setReplys] = useState([])

  //db에서 데이터 조회 여러개 동시에 실행하기
  useEffect(()=>{
    axios.all([boardApi.getBoardDetail(boardNum), replyApi.getReply(boardNum)])
    .then(axios.spread((res1, res2)=>{
      setBoard(res1.data);
      setReplys(res2.data);
    }))
  },[])

  //삭제버튼
  function goDelete(){
    if(window.confirm('삭제할까요?')){
      axios.all([replyApi.delAllReply(boardNum), boardApi.delBoard(boardNum)])
      .then(axios.spread((res1, res2)=>{console.log(res1.data)
        alert('삭제되었습니다.')
        navigate('/')
      }))
      .catch((error)=>{console.log(error)})
    }
  }

  //댓글 등록 값
  const [reg, setReg] = useState({
    replyContent: '',
    memID: loginInfo.memID,
    boardNum: boardNum
  },[]);
  
  function regReply(e){
    setReg({
      ...reg,
      replyContent: e.target.value
    })
    console.log(reg)
  }
  
  //댓글 등록
  function goRegReply(){
    console.log(reg)
    replyApi.regReply(reg)
    .then((res)=>{
      window.location.reload()
      // console.log(reg)
    })
    .catch((error)=>{
      console.log(loginInfo.memID)
      console.log(error)
      console.log(reg)
    })
  }

  //댓글 삭제
  function delReply(replyNum){
    replyApi.delReply(replyNum)
    .then((res)=>{
      window.location.reload()
      setDelState({})
    })
    .catch((error)=>{console.log(error)})
  }
  //댓글 삭제 후 재랜더링을 위한 변수
  const [delState, setDelState] = useState({});

  return (
    <div>
      <table>
        {
          <tbody>
            <tr>
              <td>작성일</td>
              <td> {board.createDate} </td>
              <td>작성자</td>
              <td> {board.memID} </td>
            </tr>
            <tr>
              <td>제목</td>
              <td colSpan={3} className='detailTitle'> {board.title} </td>
            </tr>
            <tr>
              <td>내용</td>
              <td colSpan={3} className='detailContent'> {board.content} </td>
            </tr>
          </tbody>
        }
      </table>
      <input type='button' value={'목록가기'} className='btn' onClick={(e)=>{ navigate('/')}}/>

        {/* 수정이나 삭제 버튼은 로그인한 사람이 관리자이거나, 내가 쓴 글인 경우에만 누를 수 있도록*/}
      {
        loginInfo.memID==null || loginInfo.memRole != 'ADMIN' && loginInfo.memID != board.memID
        ?
        <>
          <input type='button' value={'수정'} className='btn' disabled />
          <input type='button' value={'삭제'} className='btn' disabled />
        </>
        :
        <>
          <input type='button' value={'수정'} className='btn' onClick={(e)=>{ navigate(`/reviseForm/${boardNum}`)}}/>
          <input type='button' value={'삭제'} className='btn' onClick={(e)=>{ goDelete() }}/>
        </>
      }

      {/* 댓글 */}
      <div className='replyDiv'>
        {
          loginInfo.memID==null
          ?
          <></>
          :
          <>
            <input type='text' name='replyContent' className='searchDetail' onChange={(e)=>{regReply(e)}}/> 
            <input type='button' value={'등록'} className='btn' onClick={(e)=>{goRegReply()}}/>
          </>
        }
        {
          replys.map((reply, i) =>{
            return(
              <div key={i} className='reply'>
                <div> {reply.replyDate} </div>
                <div> {reply.memID} 
                  
                </div>
                <div> {reply.replyContent} 
                  {
                    loginInfo.memID==null || loginInfo.memRole != 'ADMIN' && loginInfo.memID != reply.memID
                    ?
                    <input type='button' className='btn' value={'삭제'} disabled/>
                    :
                    <input type='button' className='btn' value={'삭제'} onClick={(e)=>{delReply(reply.replyNum)}}/>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
  
}

export default Detail