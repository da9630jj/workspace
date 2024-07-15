import logo from './logo.svg';
import './App.css';
import data from './data';
import ItemList from './ItemList';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import Detail from './Detail';

function App() {
  //상품 목록 데이터
  const item_list=data
  // let item_list=[];


  return (
    <div className="App">
      <div className='header'>
        Book Shop
        <Link to={'/list'} className='link'>상품목록</Link>
        <Link to={'/detail'} className='link'>상품상세</Link>
      </div>

      <div className='banner'>
        <img src={process.env.PUBLIC_URL+'/header.jpg'}/>
      </div>

      {/* 이동할 수 있는 페이지의 url들 */}
      <Routes>
        <Route path='/' element={<div>메인페이지</div>}/>
        <Route path='/list' element={<ItemList item_list={item_list} /> }/>
        <Route path='/detail/:id' element={<Detail item_list={item_list}/>}/>
        <Route path='*' element={<div>잘못된 페이지 입니다.</div>}/>
      </Routes>

      {/* <ItemList item_list={item_list} /> */}


    </div>
  );
}

const Test=({name, age})=>{
  console.log(name)
  console.log(age)
  return(
    <div>
    </div>
  )
}


export default App;
