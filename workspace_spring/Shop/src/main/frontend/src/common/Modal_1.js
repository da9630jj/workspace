import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// content: 모달에서 보여지는 내용
// setIsShow: 모달을 닫는 코드
// clickCloseBtn: 모달의 확인버튼 클릭 시 실행할 코드
const Modal = ({ content, setIsShow, clickCloseBtn }) => {
  const modalContainer = useRef();
  const navigate = useNavigate();

  function closeModal() {
    // 모달의 컨테이너에서 'show' 클래스를 제거
    modalContainer.current.classList.remove('show');

    // 애니메이션이 끝난 후 상태를 업데이트
    setTimeout(() => {
      setIsShow(false);
    }, 300);
  }

  return (
    <div className='modal-container show' ref={modalContainer}>
      <div className='modal'>
        <div className='modal-header'>
          <span onClick={()=>{ closeModal(); clickCloseBtn();}}><i className="bi bi-x-lg"></i></span>
        </div>

        <div className='modal-content'>
          {content()}
        </div>

        <div className='modal-footer'>
          <button
            onClick={() => {
              closeModal();
              // 어떤 페이지에서 모달창을 실행했냐에 따라 실행코드가 달라져야한다.
              clickCloseBtn();
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
