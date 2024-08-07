import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Modal from '../../common/Modal_1';
import { joinValidate } from '../../apis/joinValidData';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    memID: '',
    memPW: '',
    checkPW: '',
    memName: '',
    memTel: '',
    post: '',
    memAddr: '',
    addrDetail: '',
    memEmail: ''
  });

  // Daum 주소 API 팝업창을 띄우기 위한 변수
  const open = useDaumPostcodePopup();

  // 주소 검색 팝업창이 닫힐 때 실행되는 함수
  function handleComplete(data) {
    setMember({
      ...member,
      post: data.zonecode,
      memAddr: data.roadAddress
    });
  }

  // 검색 버튼 클릭 시 실행되는 함수
  function handleClick() {
    open({ onComplete: handleComplete });
  }

  // input 태그를 참조하는 변수
  const email_1 = useRef();
  const email_2 = useRef();
  
  const memId_valid_tag = useRef();
  const memName_valid_tag = useRef();
  const confirmPW_valid_tag = useRef();
  const memPW_valid_tag = useRef();
  const memTel_valid_tag = useRef();

  const valid_tag = [
    memId_valid_tag, 
    memPW_valid_tag,
    confirmPW_valid_tag,
    memName_valid_tag,
    memTel_valid_tag
  ];
  
  function getMember(e) {
    // 입력한 데이터
    const newData = {
      ...member,
      [e.target.name]: e.target.name !== 'memEmail' ? 
                                          e.target.value : 
                                          email_1.current.value + email_2.current.value
    };
    const tagName = e.target.name;

    // 입력한 데이터에 대한 validation 처리
    // validation 처리: 모든 데이터가 유효한 데이터면 리턴 true
    const valid_result = joinValidate(newData, valid_tag, tagName);

    // 유효성 검사 끝난 데이터를 joinData에 저장
    setMember(newData);

    // 유효성 검사 결과를 업데이트
    return valid_result;
  }
  
  const [isShow, setIsShow] = useState(false);
  // 로그인 버튼 클릭
  function insertMem() {
    // 유효성 검사 결과가 false면 회원가입 로직 중지
    const valid_result = joinValidate(member, valid_tag, ''); // 전체 데이터에 대해 검사

    if (!valid_result) {
      alert('입력 데이터를 확인하세요.');
      return;
    }

    axios.post('/member/insertMem', member)
      .then((res) => {
        setIsShow(true);
        console.log(isShow);
        // navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  const [disabled, setDisabled] = useState(true);

  // 아이디 중복 확인
  function IDduplicate() {
    if (member.memID === '') {
      alert('아이디를 입력하세요.');
      return;
    }

    axios.get(`/member/idDuplicate/${member.memID}`)
      .then((res) => {
        const result = res.data;
        alert(result ? 'ID 중복' : 'ID 사용 가능');
        if (!result) {
          setDisabled(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 모달창 안의 내용을 생성하는 함수
  function setModalContent() {
    return (
      <div>회원가입 되었습니다.</div>
    );
  }
  // 모달 창을 닫으면 실행되는 함수
  function onClickModalBtn(){
    navigate('/loginForm')
  }

  return (
    <div className='join-div'>
      <table className='join-table'>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input type='text' className='input1' name='memID' onChange={getMember} />
              <button onClick={IDduplicate}>중복확인</button>
              <div className='feedback' ref={memId_valid_tag}></div>
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type='password' name='memPW' onChange={getMember} />
              <div className='feedback' ref={memPW_valid_tag} />
            </td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td>
              <input type='password' name='checkPW' onChange={getMember} />
              <div className='feedback' ref={confirmPW_valid_tag}></div>
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input type='text' name='memName' onChange={getMember} />
              <div className='feedback' ref={memName_valid_tag}></div>
            </td>
          </tr>
          <tr>
            <td>연락처</td>
            <td>
              <input type='text' placeholder='숫자만 입력하세요.' name='memTel' onChange={getMember} />
              <div className='feedback' ref={memTel_valid_tag} />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <input value={member.post} readOnly type='text' placeholder='우편번호' className='input3' name='post' onChange={getMember} onClick={handleClick} />
              <button onClick={handleClick}>검색</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><input value={member.memAddr} readOnly type='text' placeholder='주소' name='memAddr' onChange={getMember} onClick={handleClick} /></td>
          </tr>
          <tr>
            <td></td>
            <td><input type='text' placeholder='상세주소' name='addrDetail' onChange={getMember} /></td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input type='text' className='input2' name='memEmail' ref={email_1} onChange={getMember} />@
              <select name='memEmail' onChange={getMember} ref={email_2}>
                <option value='@naver.com'>naver.com</option>
                <option value='@gmail.com'>gmail.com</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={insertMem} disabled={disabled} className='last-btn'>회원가입</button>

      {/* 회원가입 성공 시 열리는 모달 */}
      {
      isShow &&
      <Modal content={setModalContent} setIsShow={setIsShow} clickCloseBtn={onClickModalBtn}/>
      }
    </div>
  );
}

export default Join;
