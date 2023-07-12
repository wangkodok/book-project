// 리덕스
import { useState } from "react";
import { useDispatch } from "react-redux";

// 상태 관리
import { setBookReportListAdd } from "store/states/BookReportList";

// 컴포넌트
import Modal from "components/ui/organisms/Modal";

// 스타일 컴포넌트
import styled from "styled-components";

//  버튼 저장 컴포넌트
export default function ButtonSave({ bookData, i }) {
  const dispatch = useDispatch();

  const [modal, setModal] = useState([false, false, false]);

  return (
    <>
      <Button
        onClick={() => {
          dispatch(setBookReportListAdd(bookData[i]));
          let copy = [...modal];
          copy[i] = true;
          setModal(copy);
        }}
        className={styled["btn-book-save"]}
      >
        읽었던 책 저장
      </Button>
      {modal[i] === true ? (
        <Modal bookData={bookData} modal={modal} setModal={setModal} i={i} />
      ) : null}
    </>
  );
}

const Button = styled.button`
  background-color: #b8883b;
  color: #fff;
`;
