import logo from './logo.svg';
import './App.css';
import './reset.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CarManagement from './pages/CarManagement';
import Home from './pages/Home';
import SalesInfo from './pages/SalesInfo';
import RegSalesInfo from './pages/RegSalesInfo';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <ul>
        <li onClick={(e)=>{navigate('/')}}> <span>홈</span> </li>
        <li onClick={(e)=>{navigate('/carManagement')}}><span>차량관리</span></li>
        <li onClick={(e)=>{navigate('/regSalesInfo')}}><span>판매 정보 등록</span></li>
        <li onClick={(e)=>{navigate('/salesList')}}><span>판매 목록</span></li>
      </ul>

      <Routes>
        {/* 홈 */}
        <Route path='/' element={<Home/>}/>
        {/* 차량관리 */}
        <Route path='/carManagement' element={<CarManagement/>}/>
        {/* 판매 정보 등록 */}
        <Route path='/regSalesInfo' element={<RegSalesInfo/>}/>
        {/* 판매 목록 */}
      </Routes>
    </div>
  );
}

export default App;
