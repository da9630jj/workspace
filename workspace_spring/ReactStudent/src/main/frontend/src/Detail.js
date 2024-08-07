import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail=()=>{
  const params = useParams();
  console.log(params)
  const [stu, setStu]=useState([]);
  const navigate= useNavigate();
  useEffect(()=>{
    axios
    .get(`/detail/${params.stuNum}`)
    .then((res)=>{
      console.log(res.data)
      setStu(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])
  const avg=((stu.korScore+stu.engScore+stu.engScore)/3);

  return(
    <>
      <table className="detailTable">
        <tr>
          <td>이름</td>
          <td>{stu.stuName}</td>
          <td>나이</td>
          <td>{stu.stuAge}</td>
        </tr>
        <tr>
          <td>연락처</td>
          <td>{stu.stuTel}</td>
          <td>주소</td>
          <td>{stu.stuAddr}</td>
        </tr>
        <tr>
          <td>국어점수</td>
          <td>{stu.korScore}</td>
          <td>영어점수</td>
          <td>{stu.engScore}</td>
        </tr>
        <tr>
          <td>수학점수</td>
          <td>{stu.mathScore}</td>
          <td>평균</td>
          <td>{Math.round(avg*100)/100}</td>
        </tr>
      </table>
      <input type="button" value={'뒤로가기'} className="btn" onClick={(e)=>{
        navigate(-1)
      }}/>
    </>
  )
}
export default Detail;