import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Info from './Info';
import Reg from './Reg';
import Order from './Order';
import OrderList from './OrderList';
import Detail from './Detail';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <ul>
          <li onClick={()=>{
            navigate('/')
          }}>상품정보</li>
          <li onClick={()=>{
            navigate('/reg')
          }}>상품등록</li>
          <li onClick={()=>{
            navigate('/order')
          }}>주문하기</li>
          <li onClick={()=>{
            navigate('/orderList')
          }}>주문목록</li>
        </ul>
      </header>

      <Routes>
        {/* 상품 정보 */}
        <Route path='/' element={<Info/>}/>
        
        <Route path='/detail/:itemNum' element={<Detail/>}/>
        {/* 상품 등록 */}
        <Route path='/reg' element={<Reg/>}/>
        {/* 주문하기 */}
        <Route path='/order' element={<Order/>}/>
        {/* 주문 목록 */}
        <Route path='/orderList' element={<OrderList/>}/>
      </Routes>
    </div>
  );
}

export default App;
