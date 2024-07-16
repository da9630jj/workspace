import axios from "axios";

const AxiosTest=()=>{
  
  //spring 서버와 데이터 통신을 위해 react에서는 axios 기술 사용
  //axios설치 : npm install axios
  //axios는 데이터베이스의 작업 종류에 따라 함수를 제공
  //get(url [, config]) : 데이터 조회 (SELECT)
  //post(url, data [, config]) : 데이터 삽입 (INSERT)
  //put(utl, data [, config]) : 데이터 수정 (UPDATE)
  //delete(url [, config]) : 데이터 삭제 (DELETE)

  //사용 예제
  //axios
  //.get()
  //.then(데이터 통신 성공 후 실행 내용)
  //.catch(데이터 통신 중 오류 발생 시 실행 내용);
  
  //기번 형태
  // axios
  //   .get('/getList')
  //   .then((res)=>{})
  //   .catch((error)=>{});

  //쿼리에 빈값이 없는 데이터 조회
  function get1(){
    axios
    .get('/getList')
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error)=>{
      console.log('오류 발생');
      console.log(error)
    });
  }

  //post로 데이터 전달하기
  function postTest(){
    axios
    .post('/insertBoard', {name:'Kim', age:20})
    .then((res)=>{

    })
    .catch((error)=>{

    });
  }

  //put 테스트
  function putTest(){
    axios
    .put('/updateBoard', {boardNum:1, boardTitle:'java', boardWriter:'Hong'})
    .then((res)=>{
      alert('내용을 수정했습니다.');
      alert(res.data);
    })
    .catch((error)=>{});
  }

  function get2(){
    axios
    .get('/detail/1')
    .then((res)=>{})
    .catch((error)=>{})
  }

  return(
    <div>
      <h2>axios통신 예제</h2>
      <div className="btn-div">
        <button type="button" onClick={()=>{
          get1()
        }}>get으로 데이터 조회하기1</button>
      </div>
      <div className="btn-div">
        <button type="button" onClick={()=>{
          get2()
        }}>get으로 데이터 조회하기2</button>
      </div>
      <div className="btn-div">
        <button type="button" onClick={()=>{
          postTest()
        }}>post로 데이터 전달하기</button>
      </div>
      <div className="btn-div">
        <button type="button" onClick={()=>{
          putTest()
        }}>put으로 데이터 전달하기</button>
      </div>
    </div>
  );
}
export default AxiosTest;