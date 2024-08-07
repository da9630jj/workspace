import axios from "axios";

// 게시글 리스트 가져오기
export const getBoard=(data)=>{
  const response = axios.post('/board/boardList', data);
  return response;
}

// 게시글 상세 조회
export const getBoardDetail=(data)=>{
  const response = axios.get(`/board/detail/${data}`);
  return response;
}

// 글 작성
export const goWrite=(data)=>{
  const response = axios.post('/board/writeBoard' , data);
  return response;
}

//게시글 삭제
export const delBoard=(data)=>{
  const response = axios.delete(`/board/delBoard/${data}`);
  return response;
}

//게시글 수정 페이지
export const reviseForm=(data)=>{
  const response = axios.get(`/board/reviseForm/${data}`);
  return response;
}

//게시글 수정하기
export const goRevise=(data)=>{
  const response = axios.put('/board/revise', data)
  return response;
}

