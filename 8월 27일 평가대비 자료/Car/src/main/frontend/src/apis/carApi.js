import axios from "axios";

// 차량 목록 
export const carList=(data)=>{
  return axios.get('/carInfo/carManage')
}

// 차량 등록
export const regCar=(data)=>{
  return axios.post("/carInfo/insertCar", data)
}
