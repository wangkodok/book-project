// 리덕스
import { useDispatch } from "react-redux";

// 상태 관리
import { setBookReportListAdd } from "store/State";

// 컴포넌트
import Modal from "components/Modal";
import ButtonCheck from "components/ui/atoms/ButtonCheck";
import ButtonSave from "components/ui/atoms/ButtonSave";
import ButtonClick from "components/ui/atoms/ButtonClick";

// CSS 모듈
import styled from "style/main/BookSearchResult.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 책 검색 후 목록에 나오는 배지
function Price({ bookData, i }) {
  if (bookData[i].price.toString() > 20000) {
    return <strong className={styled.md}>MD추천</strong>;
  } else {
    return <strong className={styled.md}>Book</strong>;
  }
}

export default function BookSearchResult({ save, bookData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modal, setModal] = useState([false, false, false]);

  return (
    <>
      <div className={styled.bookWrap}>
        {save === "" ? null : (
          <ul className={styled.bookList}>
            {bookData.map((value, i) => {
              return (
                <li className={styled.item} key={i}>
                  <figure>
                    <img
                      src={
                        bookData[i].thumbnail === ""
                          ? "https://via.placeholder.com/120x174"
                          : bookData[i].thumbnail
                      }
                      alt={bookData[i].title}
                    />
                  </figure>
                  <div className={styled.boxContent}>
                    <div>
                      <Price bookData={bookData} i={i} />

                      <strong className={styled.title}>
                        {bookData[i].title}
                      </strong>
                      <p className={styled.bookTitle}>
                        {" "}
                        {bookData[i].contents === ""
                          ? null
                          : `${bookData[i].contents}`}
                      </p>
                    </div>
                    <div className={styled.sale}>
                      <ButtonSave bookData={bookData} i={i}></ButtonSave>
                      <ButtonClick
                        innerText="서점 찾기"
                        color="#b8883b"
                        boxShadow="0 0 0 1px #b8883b inset"
                      />
                      <button
                        onClick={() => {
                          navigate("/BookRecord/page");
                        }}
                        className={styled["btn-bookstore-find"]}
                      >
                        페이지 이동
                      </button>
                    </div>
                  </div>
                  <ButtonCheck></ButtonCheck>
                </li>
              );
            })}
          </ul>
        )}
        <div className={styled["desc-text"]}>
          <p>표시하고 “내 서재 저장” 해보세요.</p>
        </div>
        <div className={styled["book-save"]}>
          <button>내 서재 저장</button>
        </div>
      </div>
    </>
  );
}
