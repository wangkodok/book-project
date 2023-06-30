// CSS 모듈
// import styled from "style/main/BookSearch.module.css";

// 컴포넌트
import BookSearchResult from "./BookSearchResult";
import BookOfTheMonth from "components/BookOfTheMonth";
import Banner from "components/Banner";
import BookMd from "components/ui/organisms/BookMd";
import DeviceSync from "components/DeviceSync";

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
  return (
    <>
      <BookOfTheMonth />
      <Banner />
      <BookMd />
      <DeviceSync />
      <section>
        {/* <div className={styled.bookSearch}>
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
        </div> */}

        {/* 책 검색 결과 */}
        {/* <BookSearchResult
          save={save}
          bookData={bookData}
          addOnClick={addOnClick}
          convertPrice={convertPrice}
        /> */}
      </section>
    </>
  );
}

export default BookSearch;
