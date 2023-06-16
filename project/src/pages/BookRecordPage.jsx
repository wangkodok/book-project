import SubPageVisual from "components/SubPageVisual";
import BookSearchResult from "components/main/BookSearchResult";
import styled from "styled-components";
import Search from "assets/ico_search.png";

export default function BookRecordPage({
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
      {SubPageVisual("책 기록", "읽었던 책을 검색하고, 저장하여 기록하세요.")}
      <SectionBookSearch>
        <div className="bookSearch">
          <form className="form" id="form" name="search">
            <input
              form="form"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={query}
              test="text"
              placeholder="책 제목을 입력하세요."
            />
            <button onClick={onClick} type="button">
              <span className="blind">검색</span>
            </button>
          </form>
        </div>

        {/* 책 검색 결과 */}
        {bookData.length === 0 ? null : (
          <BookSearchResult
            save={save}
            bookData={bookData}
            addOnClick={addOnClick}
            convertPrice={convertPrice}
          />
        )}
      </SectionBookSearch>
    </>
  );
}

const SectionBookSearch = styled.section`
  .bookSearch {
    position: relative;
    bottom: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .bookSearch h1 {
    margin: 0 0 20px 0;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -2px;
  }

  .bookSearch .form {
    position: relative;
    width: 381px;
    margin: 0 auto;
  }

  .bookSearch input {
    width: 100%;
    height: 48px;
    border: 1px solid #000;
    border-radius: 24px;
    padding: 14px 48px 14px 14px;
    box-sizing: border-box;
    outline: none;
  }

  .bookSearch button {
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${Search});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 20px;
    width: 48px;
    height: 48px;
    outline: none;
  }
`;
