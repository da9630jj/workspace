import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as boardApi from '../apis/boardApi'

const ReviseForm = () => {
  const naviagate=useNavigate()
  const {boardNum} =useParams()
  
  // 저장할 빈 객체 만들기
  const [board, setBoard] = useState({});

  // 저장된 값 가져오기
  useEffect(()=>{
    boardApi.reviseForm(boardNum)
    .then((res)=>{
      console.log(res.data)
      setBoard(res.data)
    })
    .catch((error)=>{console.log(error)})
  }, [])

  // 값 변경
  function reviseValue(e){
    setBoard({
      ...board,
      [e.target.name] : e.target.value
    })
  }

  // 변경된 값으로 수정
  function goRevise(){
    boardApi.goRevise(board)
    .then((res)=>{
      console.log(res.data)
      alert('수정되었습니다.')
      naviagate(`/detail/${boardNum}`)
    })
    .catch((error)=>{console.log(error)})
  }

  return (
    <div className='list'>
      <table>
        <tbody>
          <tr>
            <td>작성일</td>
            <td> {board.createDate} </td>
            <td>작성자</td>
            <td> {board.memID} </td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={3}> <input type='text' name='title' value={board.title} className='inputTitle'  onChange={(e)=>{reviseValue(e)}}/> </td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={3}> <textarea name='content' value={board.content} onChange={(e)=>{reviseValue(e)}}/> </td>
          </tr>
        </tbody>
      </table>
      <input type='button' className='btn' value={'뒤로가기'} onClick={(e)=>{naviagate(-1)}}/>
      <input type='button' className='btn' value={'수정'} onClick={(e)=>{goRevise()}}/>
    </div>
  )
}

export default ReviseForm