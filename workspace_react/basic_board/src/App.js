import logo from './logo.svg';
import './App.css';
import data from './data';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardLIst';
import Detail from './Detail';
import Write from './Write';
import { useState } from 'react';
import InputTest from './inputTest';

function App() {
  // const board_list = data;
  const [boardList, setBoardList]=useState(data)

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<BoardList board_list={boardList}/>}/>
        <Route path='/detail/:id' element={<Detail board_list={boardList} setBoardList={setBoardList}/>}/>
        <Route path='/write' element={<Write board_list={boardList} setBoardList={setBoardList}/>}/>
        <Route path='/test' element={InputTest}/>
      </Routes> 



    </div>
  );
}

export default App;
