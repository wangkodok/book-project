import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setBookReportListAdd } from "store/states/BookReportList";
import styled from "styled-components";

export default function Modal({ bookData, modal, setModal, i }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ModalWindow>
      <p className="desc">내가 읽었던 책들 보러 가시겠습니까?</p>
      <div className="btn-click">
        <button
          onClick={() => {
            dispatch(setBookReportListAdd(bookData[i]));
            navigate("/book-record/my-books");
          }}
        >
          이동하기
        </button>
        <button
          onClick={() => {
            let copy = [...modal];
            copy[i] = false;
            setModal(copy);
          }}
        >
          닫기
        </button>
      </div>
    </ModalWindow>
  );
}

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 32px;
  border: 1px solid #000;
  border-radius: 8px;

  .desc {
    margin: 0 0 20px 0;
  }

  button {
    border: 1px solid #000;
  }
`;
