import axios from "axios";

// 모델 이름 가져오기
export const carModel=(data)=>{
  return axios.get('/carInfo/carManage')
}