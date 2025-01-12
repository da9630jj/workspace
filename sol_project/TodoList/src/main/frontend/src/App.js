import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Task from './pages/Task';

function App() {
  return (
    <div className="main-container">
      <h1 className='main-title'>
        Todo List
      </h1>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Task/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
