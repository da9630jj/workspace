import axios from "axios";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const DelStu=()=>{
  const [stus, setStus]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    axios
    .get('/delStu')
    .then((res)=>{
      console.log(res.data)
      setStus(res.data)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  function del(stuNum){
    if(window.confirm('삭제할까요?')){
      axios
      .delete(`/delete/${stuNum}`)
      .then((res)=>{
        alert('삭제되었습니다.')
        navigate('/delStu')
        //redirect('/')
        stus.forEach((stu, i)=>{
          if(stu.stuNum == stuNum){
            stus.splice(i, 1)
          }
        })
        stus.filter((stu)=>stu.stuNum != stuNum);
        setStus([...stus])
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    
  }

  return(
    <>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>학생명</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {
            stus.map((stu, i)=>{
              return(
                  <tr className="delTbody" key={i}>
                    <td>{i+1}</td>
                    <td>{stu.stuName}</td>
                    <td><input className="btnDel" type="button" value={'삭제'} onClick={(e)=>{
                      del(stu.stuNum)
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
export default DelStu;