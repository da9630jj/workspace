import axios from "axios";

// 모델 이름 가져오기
export const carModel=(data)=>{
  return axios.get('/carInfo/carManage')
}

//판매 정보 등록
export const regsaleInfo=(data)=>{
  return axios.post('/salesInfo/regCar', data)
}