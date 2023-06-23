// 리덕스
import { useDispatch } from "react-redux";
// 상태 관리
import { setCartListAdd, setBookReportListAdd } from "store/State";
// 컴포넌트
import NoSearchResults from "components/main/NoSearchResults";
import Modal from "components/Modal";
import ButtonCheck from "components/ui/atoms/ButtonCheck";

// CSS 모듈
import styled from "style/main/BookSearchResult.module.css";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

// 책 검색 후 목록에 나오는 배지
function Price({ bookData, i }) {
  if (bookData[i].sale_price < 0) {
    if (bookData[i].price.toString() > 20000) {
      // return <strong className={styled["sold-out"]}>품절</strong>;
    }
    // return <strong className={styled["sold-out"]}>품절</strong>;
  }

  if (bookData[i].price.toString() > 20000) {
    return <strong className={styled.md}>MD추천</strong>;
  } else {
    return <strong className={styled.md}>Book</strong>;
  }
}

function BookSearchResult({ save, bookData, addOnClick, convertPrice }) {
  const dispatch = useDispatch();

  const [modal, setModal] = useState([false, false, false]);

  let navigate = useNavigate();

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
                      {/* <button>구매하기</button>
                    {bookData[i].sale_price > 0 ? (
                      <button
                        onClick={() => {
                          dispatch(setCartListAdd(bookData[i]));
                        }}
                      >
                        찜하기
                      </button>
                    ) : (
                      <em className={styled["item-sold-out"]}>품절</em>
                    )} */}
                      <button
                        onClick={() => {
                          dispatch(setBookReportListAdd(bookData[i]));

                          console.log(bookData[i].title);

                          // setModal()
                          // if (modal[i] === true) {
                          // }

                          let copy = [...modal];
                          copy[i] = true;
                          setModal(copy);
                          // let copy = [...modal];
                          // copy[i] = copy[i] + 1;
                          // setModal(copy);
                        }}
                        className={styled["btn-book-save"]}
                      >
                        읽었던 책 저장
                      </button>
                      {modal[i] === true ? (
                        <Modal
                          bookData={bookData}
                          modal={modal}
                          setModal={setModal}
                          i={i}
                        />
                      ) : null}

                      {/* 
                      
                        라우터로 링크 연결 다시 알아보고 연결하기

                        0. 라우터 먼저 생성 후 페이지 연결
                        1. 읽었던 책 저장 버튼 클릭한다.
                        1-1. 상태 관리에 책 저장
                        2. 모달창이 나온다.
                        2-1. 모달창에 문구,  페이지 링크 이동, 닫기 넣어서 제작

                      */}

                      <button className={styled["btn-bookstore-find"]}>
                        서점 찾기
                      </button>

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

                  {/* MD 추천 */}
                  {/* {`${bookData[i].price.toString()}` > 20000 &&
                `${bookData[i].sale_price}` < 0 ? (
                  <strong className={styled["sold-out"]}>품절</strong>
                ) : (
                  <strong className={styled.md}>MD추천</strong>
                )} */}

                  {/* 품절 */}
                  {/* {`${bookData[i].sale_price}` < 0 ? (
                  <strong className={styled.md}>품절</strong>
                ) : null} */}
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

        {/* 검색 결과가 없을 시 나오는 문장 */}
        {/* <NoSearchResults
        save={save}
        bookData={bookData}
        addOnClick={addOnClick}
      /> */}
      </div>
      {/* <Outlet></Outlet> */}
    </>
  );
}

export default BookSearchResult;

{
  /* <p className={styled.price}>
      정상가격: <em>{`${convertPrice(bookData[i].price)}원`}</em>
    </p>
    <p className={styled.sale_price}>
      <em>
        {bookData[i].sale_price < 0
          ? null
          : `할인가격: ${convertPrice(bookData[i].sale_price)}원`}
      </em>
    </p>
    <p className={styled.authors}>
      저자: {bookData[i].authors[0]}
    </p>
    <p className={styled.datetime}>
      최초 발행일:{" "}
      {`${bookData[i].datetime.substr(0, 4)}. ${bookData[
        i
      ].datetime.substr(5, 2)}. ${bookData[i].datetime.substr(
        8,
        2
      )}.`}
    </p>
    <p className={styled.publisher}>
      출판사: {bookData[i].publisher}
    </p>
*/
}
