import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const RegStu=()=>{
  const navigate=useNavigate()

  function write(){
    if(stu.stuName==''){
      alert('이름을 입력해주세요.')
      return
    }

    axios
    .post('/insertStu', stu)
    .then((res)=>{
      console.log(res.data)
      alert('등록되었습니다.')
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const [stu, setStu]=useState({
    stuName:'',
    stuAge:0,
    stuTel:'',
    stuAddr:''
  })

  function upload(e){
    setStu({
      ...stu,
      [e.target.name]:e.target.value
    })
  }
  

  return(
    <div className="reg">
      <div>이름 <input type="text" name="stuName" onChange={(e)=>{
        upload(e)
      }}/></div>
      <div>나이 <input type="text" name="stuAge" onChange={(e)=>{
        upload(e)
      }}/></div>
      <div>연락처 <input type="text" name="stuTel"onChange={(e)=>{
        upload(e)
      }}/></div>
      <div>주소 <input type="text" name="stuAddr" onChange={(e)=>{
        upload(e)
      }}/></div>
      <input className="btn" type="button" value={'글쓰기'} onClick={(e)=>{
        write();
      }}/>
    </div>
  )
}
export default RegStu;