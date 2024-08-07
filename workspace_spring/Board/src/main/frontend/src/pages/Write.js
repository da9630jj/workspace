import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as boardApi from '../apis/boardApi'

const Write = ({loginInfo}) => {
  const navigate = useNavigate()

  const [writeData, setWriteData] = useState({
    title: '',
    content : '',
    memID: loginInfo.memID
  });
  
  function write(e){
    setWriteData({
      ...writeData,
      [e.target.name]: e.target.value,
    })
  }
  
  function writeClick(){
    console.log(loginInfo.memID)
    console.log(writeData)
    if(writeData.title == ''){
      alert('제목을 입력하세요.')
      return
    }

    boardApi.goWrite(writeData)    
    .then((res)=>{
      console.log(res.data)
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='list'>
      <table>
        <tbody>
          <tr>
            <td>제목</td>
            <td> <input type='text' name='title' className='inputTitle' onChange={(e)=>{
              write(e)
            }}/> </td>
          </tr>
          <tr>
            <td>내용</td>
            <td> <textarea name='content' onChange={(e)=>{
              write(e)
            }}/> </td>
          </tr>
        </tbody>
      </table>
      <input type='button' value={'글등록'} className='btn' onClick={(e)=>{writeClick()}}/>
    </div>
  )
}

export default Write