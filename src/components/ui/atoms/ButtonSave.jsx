import { useState } from "react";
import styled from "styled-components";

import Modal from "components/ui/organisms/Modal";

//  버튼 저장 컴포넌트
export default function ButtonSave({ bookData, i }) {
  const [modal, setModal] = useState([false, false, false]);

  return (
    <>
      <Button
        onClick={() => {
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
