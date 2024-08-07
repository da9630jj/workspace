import logo from './logo.svg';
import './reset.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import StuInfo from './StuInfo';
import RegStu from './RegStu';
import DelStu from './DelStu';
import CareScore from './CareScore';
import Detail from './Detail';
import PutScore from './PutScore';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header>
        <ul>
          <li onClick={(e)=>{
            navigate('/');
          }}>학생정보조회</li>
          <li onClick={(e)=>{
            navigate('/regStu');
          }}>학생등록</li>
          <li onClick={(e)=>{
            navigate('/delStu');
          }}>학생삭제</li>
          <li onClick={(e)=>{
            navigate('/careScore');
          }}>성적관리</li>
        </ul>
      </header>

      <Routes>

        {/* 학생 정보 조회 */}
        <Route path='/' element={<StuInfo/>}/>
        {/* 학생 등록 */}
        <Route path='/regStu' element={<RegStu/>}/>
        {/* 학생 삭제 */}
        <Route path='/delStu' element={<DelStu/>}/>
        {/* 성적 관리 */}
        <Route path='/careScore' element={<CareScore/>}/>
        {/* 학생 세부 사항 */}
        <Route path='detail/:stuNum' element={<Detail/>}/>
        {/* 성적 등록 */}
        <Route path='/putScore/:stuNum' element={<PutScore/>}/>

      </Routes>
    </div>
  );
}

export default App;
