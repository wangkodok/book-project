import styled from "../style/BookSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { isChange, setCartListAdd } from "../store/State";

function BookSearch({
  onChange,
  onKeyDown,
  query,
  onClick,
  save,
  bookData,
  addOnClick,
  convertPrice,
}) {
  let is = useDispatch();
  let dispatch = useDispatch();
  let count = useSelector((state) => {
    return state.count;
  });
  console.log(count);

  return (
    <section>
      <div className={styled.bookSearch}>
        <h1>책을 검색해보세요.</h1>
        <form className={styled.form} id="form" name="search">
          <input
            form="form"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={query}
            test="text"
            placeholder="예) 리액트를 다루는 기술, 이것이 자바다"
          />
          <button onClick={onClick} type="button">
            <span className="blind">검색</span>
          </button>
        </form>
      </div>
      <div className={styled.bookWrap}>
        {save === "" ? null : (
          <ul className={styled.bookList}>
            {bookData.map((value, i) => {
              return (
                <li className={styled.item} key={i}>
                  <figure>
                    <img src={bookData[i].thumbnail} alt={bookData[i].title} />
                  </figure>
                  <div className={styled.boxContent}>
                    <strong className={styled.title}>
                      {bookData[i].title}
                    </strong>
                    <p className={styled.bookTitle}>
                      책 소개: {bookData[i].contents}
                    </p>
                    <p className={styled.price}>
                      정상가격:{" "}
                      <em>{`${convertPrice(bookData[i].price)}원`}</em>
                    </p>
                    <p className={styled.sale_price}>
                      할인가격:{" "}
                      <em>{`${convertPrice(bookData[i].sale_price)}원`}</em>
                    </p>
                    <p className={styled.authors}>
                      저자: {bookData[i].authors[i]}
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
                    <div className={styled.sale}>
                      <button>구매하기</button>
                      <button
                        onClick={() => {
                          const map = new Map(); // 맵
                          for (const character of bookData) {
                            map.set(JSON.stringify(character), character); // name, company가 모두 같은 객체 요소는 제외한 맵 생성
                          }
                          const arrUnique = [...map.values()];
                          console.log(arrUnique); // 중복 제거 결과
                          dispatch(setCartListAdd(arrUnique[i]));
                        }}
                      >
                        찜하기
                      </button>
                    </div>
                  </div>

                  {/* MD추천 */}
                  {`${bookData[i].price.toString()}` > 20000 ? (
                    <strong className={styled.md}>MD추천</strong>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}

        {/* 검색결과가 없을 시 나오는 문장 */}
        {save === "" ? null : bookData.length === 0 ? (
          <>
            <p>
              <strong>"{save}"</strong>에 대한 검색결과가 없습니다.
            </p>
            <p>ㆍ검색어의 철자가 정확한지 확인해주세요.</p>
            <p>ㆍ비슷한 다른 검색어를 입력해보세요.</p>
            <p>ㆍ단어의 수를 줄여보세요.</p>
          </>
        ) : is(isChange()) === false ? null : (
          <button className={styled.itemAddButton} onClick={addOnClick}>
            더 보기
          </button>
        )}
      </div>
    </section>
  );
}

export default BookSearch;
