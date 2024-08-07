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
      <header>
        <ul>
          <li onClick={(e)=>{navigate('/')}}>홈</li>
          <li onClick={(e)=>{navigate('/carManagement')}}>차량관리</li>
          <li onClick={(e)=>{navigate('/regSalesInfo')}}>판매 정보 등록</li>
          <li onClick={(e)=>{navigate('/salesList')}}>판매 목록</li>
        </ul>

        
      </header>

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
