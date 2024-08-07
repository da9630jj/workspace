import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PutScore = () => {
  const params = useParams();
  console.log(params.stuNum)

  const navigate = useNavigate();


  const [score, setScore]=useState({
    stuNum: 0,
    stuName:'',
    korScore:0,
    engScore:0,
    mathScore:0
  });

  // 저장된 점수 가져오기
  useEffect(()=>{
    axios
    .get(`/getScore/${params.stuNum}`)
    .then((res)=>{
      const { stuNum,stuName, korScore, engScore, mathScore} = res.data;
      console.log(res.data)
      setScore({
        stuNum: stuNum,
        stuName: stuName,
        korScore: korScore,
        engScore: engScore,
        mathScore: mathScore
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  // 점수 변경
  function changeScore(e){
    setScore({
      ...score,
      [e.target.name]:e.target.value
    })
  }

  // 점수 등록
  function regScore(){
    axios
    .put(`/putScore/${params.stuNum}`, score)
    .then((res)=>{
      alert('등록되었습니다.')
      navigate('/careScore')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='reg'>
      <div>{score.stuName} 학생의 성적을 입력합니다.</div>
      <div>국어 <input type='text' name='korScore' value={score.korScore} onChange={(e)=>{
        changeScore(e);
      }}/> </div>
      <div>영어 <input type='text' name='engScore' value={score.engScore}  onChange={(e)=>{
        changeScore(e)
      }}/> </div>
      <div>수학 <input type='text' name='mathScore' value={score.mathScore}  onChange={(e)=>{
        changeScore(e)
      }}/> </div>
      <input type='button' value={'점수등록'} className='btn' onClick={(e)=>{
        regScore();
      }}/>
    </div>
    
  )
}

export default PutScore