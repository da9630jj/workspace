import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { getList } from './testApi';

function App() {
  function test1(){
    axios.get('test1')
    .then(res=>{console.log(res.data)})
    .catch(error=>{console.log(error)})
  }

  // async가 붙으면 함수가 비동기방식으로 진행
  async function test2(){
    // await 명령어 사용 시 동기 방식으로 진행

    try{
      let cnt = '';
      const res = await axios.get('/test1')
      cnt = res.data
    }catch(error){
      console.log(error)
    }
  }

  function test3(){
    console.log(1)
    test2()
    console.log(2)
  }

  return (
    <div className="App">
      <button type='button' onClick={test3}>test1</button>
      <button type='button' onClick={getList}>test2</button>
    </div>
  );
}

export default App;
