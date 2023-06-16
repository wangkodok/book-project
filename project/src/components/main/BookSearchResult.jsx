// 리덕스
import { useDispatch } from "react-redux";

// 상태 관리
import { setCartListAdd, setBookReportListAdd } from "store/State";

// 컴포넌트
import NoSearchResults from "components/main/NoSearchResults";

// CSS 모듈
import styled from "style/main/BookSearchResult.module.css";

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

  return (
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
                      }}
                      className={styled["btn-book-save"]}
                    >
                      읽었던 책 저장
                    </button>
                    <button className={styled["btn-bookstore-find"]}>
                      서점 찾기
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
                <button className={styled["check"]}></button>
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
