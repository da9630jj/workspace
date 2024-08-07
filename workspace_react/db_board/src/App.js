import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';
import AxiosTest from './AxiosTest';
import BoardDetail from './BoardDetail';
import InsertBoard from './InsertBoard';
import UpdateBoard from './UpdateBoard';

function App() {
  //가장 나중에 실행
  //컴포넌트의 생애주기에 따라 기능을 구현
  //생애주기
  //mount(컴포넌트 생성)
  //update(컴포넌트 재랜더링)
  //unmount(컴포넌트 제거)
  //const[age, setAge] = useState(0);
  //const[addr, setAddr] = useState('');
  //setAge(10); -> 뒤에 있는 함수를 사용해서 매개변수로 전달되면 state값 변경 -> 재랜더링(컴포넌트 재해석)

  //useEffect(()=>{}); mount + update 될 때 실행
  //useEffect(()=>{},[]); mount 될 때 실행
  //useEffect(()=>{},[age]); mount + age라는 state변수의 값이 update 될 때
  //useEffect(()=>{},[age, addr]); mount + age , addr이라는 state변수의 값이 update 될 때

  return (
    <div className="App">
      
      <Routes>
        {/* axios 예제 페이지 */}
        <Route path='/axios' element={<AxiosTest/>}/>
        {/* 게시글 목록 페이지 */}
        <Route path='/' element={ <BoardList /> } />
        {/* 상세 조회 화면 */}
        <Route path='/detail/:boardNum' element={<BoardDetail/>}/>
        {/* 글 작성 화면 */}
        <Route path='/insertBoard' element={<InsertBoard/>}/>
        {/* 글 수정 화면 */}
        <Route path='update/:boardNum' element={<UpdateBoard/>}/>

      </Routes>

    </div>
  );
}

export default App;
