import axios from "axios"

//아이디 중복체크
export const checkID=(data)=>{
  const response = axios.get(`/member/checkID/${data}`);
  return response;
}


//회원가입
export const goJoin=(data)=>{
  const response = axios.post('/member/insertMem', data)
  return response;
}

//로그인
export const goLogin=(data)=>{
  const response = axios.post('/member/login', data)
  return response;
}