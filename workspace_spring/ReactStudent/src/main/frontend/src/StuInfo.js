import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StuInfo=()=>{
  //학생목록을 저장할 state 변수
  const [stuList, setStuList] = useState([]);

  //학생목록 조회
  useEffect(()=>{
    axios
    .get('/list')
    .then((res)=>{
      console.log(res.data)
      setStuList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  const navigate= useNavigate();

  return(
    <>
      <table>
        <thead>
          <tr>
            <td>NO</td>
            <td>학생명</td>
            <td>국어점수</td>
            <td>영어점수</td>
            <td>수학점수</td>
            <td>평균</td>
          </tr>
        </thead>
        <tbody>
          {
            stuList.map((stu, i)=>{
              return(
                <tr key={i}>
                  <td> {i+1} </td>
                  <td className="name" onClick={(e)=>{
                    navigate(`/detail/${stu.stuNum}`)
                  }}> {stu.stuName} </td>
                  <td> {stu.korScore} </td>
                  <td> {stu.engScore} </td>
                  <td> {stu.mathScore} </td>
                  <td> {Math.round(((stu.korScore+stu.engScore+stu.engScore)/3)*100)/100} </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}
export default StuInfo;