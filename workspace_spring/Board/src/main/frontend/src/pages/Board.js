import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as boardApi from '../apis/boardApi'

const Board = ({loginInfo}) => {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);

  // 저장된 게시글 리스트 가져오기
  useEffect(()=>{
    boardApi.getBoard(searchData)
    .then((res)=>{
      setBoards(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  //검색 조건을 저장할 변수
  const [searchData, setSearchData] = useState({
    searchType:'TITLE',
    searchValue:''
  });

  function changeSearchData(e){
    setSearchData({
      ...searchData,
      [e.target.name]:e.target.value
    })
  }

  // 검색버튼 클릭 시 실행 함수
  function searchBoard(){
    boardApi.getBoard(searchData)
    .then((res)=>{setBoards(res.data)})
    .catch((error)=>{console.log(error)})
  }

  return (
    <div className='list'>
      <h2>자유게시판</h2>
      <div className='search'>
        <select name='searchType' onChange={(e)=>{changeSearchData(e)}}>
          <option value={'TITLE'}>제목</option>
          <option value={'MEM_ID'}>작성자</option>
        </select>
        <input type='text' name='searchValue' className='seachText' onChange={(e)=>{changeSearchData(e)}}/>
        <input type='button' value={'검색'} className='btn' onClick={(e)=>{searchBoard()}}/>
      </div>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>
        </thead>
        <tbody>
          {
            boards.map((board, i)=>{
              return(
                <tr key={i}>
                  <td className='no'> {board.boardNum} </td>
                  <td className='title' onClick={(e)=>{navigate(`/detail/${board.boardNum}`)}}> {board.title} </td>
                  <td> {board.memID} </td>
                  <td> {board.createDate} </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
      {/* 로그인 되지 않은 상태에서는 글쓰기 버튼 클릭 막기 */}
      {
        loginInfo.memID==null 
        ?
        <input type='button' value={'글쓰기'} className='btn' disabled/>
        :
        <input type='button' value={'글쓰기'} className='btn' onClick={(e)=>{
          navigate('/write')
        }}/>
      }

    </div>
  )
}

export default Board