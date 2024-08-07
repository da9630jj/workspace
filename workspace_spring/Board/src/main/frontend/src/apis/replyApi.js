import axios from "axios";

//댓글 가져오기
export const getReply=(data)=>{
  const response = axios.get(`/reply/selectReply/${data}`)
  return response;
}

//댓글 전체 삭제
export const delAllReply = (data)=>{
  const response = axios.delete(`/reply/delAllReply/${data}`);
  return response;
}

// 댓글 등록
export const regReply=(data)=>{
  const response = axios.post('/reply/insertReply', data);
  return response;
}

//댓글 삭제
export const delReply=(data)=>{
  const response = axios.delete(`/reply/delReply/${data}`);
  return response;
}