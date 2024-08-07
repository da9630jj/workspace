import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const CareScore=()=>{
  const [stus, setStus]= useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    axios
    .get('/delStu')
    .then((res)=>{
      setStus(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])
  
  return(
    <>
      <table className="care">
        <thead>
          <tr>
            <td>No</td>
            <td>학생명</td>
            <td>성적입력</td>
          </tr>
        </thead>
        <tbody>
          {
            stus.map((stu, i)=>{
              return(
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{stu.stuName}</td>
                    <td><input className="btnDel" type="button" value={'입력'} onClick={(e)=>{
                      navigate(`/putScore/${stu.stuNum}`)
                    }}/></td>
                  </tr>
              )
            })
          }
          </tbody>
      </table>
    </>
  )
}
export default CareScore;