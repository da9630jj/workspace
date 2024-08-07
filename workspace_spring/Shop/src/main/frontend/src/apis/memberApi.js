import axios from "axios";
// 회원 가입
export const insertMem=(data)=>{
  return axios.post('/member/insertMem', data);
}