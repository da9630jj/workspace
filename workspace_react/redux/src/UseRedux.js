import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { numActions } from './redux/numState'

// useSelector() : store에 저장한 state변수값 가져오기
// useDispatch() : state변수의 값을 변경시키는 함수 호출에 사용
const UseRedux = () => {
  // store에 저장된 state 변수 num 가져오기
  // 매개변수 state : store에 저장된 모든 state변수
  const num = useSelector(state => state.numState.value)

  // store에 저장된 함수 호출을 위한 dispatch 생성
  const dispatch = useDispatch();

  // +1 함수
  const add = ()=>{
    dispatch(numActions.addNum());
  }
  

  return (
    <div>
      <h3>카운터앱(Redux 사용)</h3>
      <h3> {num} </h3>

      <div>
        <button onClick={add()}>+1</button>
        <button onClick={()=>{dispatch(numActions.subNum())}}>-1</button>
        <button onClick={()=>{dispatch(numActions.resetNum())}}>reset</button>
      </div>
    </div>
  )
}

export default UseRedux