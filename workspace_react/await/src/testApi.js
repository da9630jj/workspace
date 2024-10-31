import axios from "axios";

export const getList = async ()=>{
  try{
    const res = await axios.get('/test1')
    return res.data;
  }catch(erorr){
    console.log(erorr)
  }
}