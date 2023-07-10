import SubPageVisual from "components/ui/atoms/SubPageVisual";
import BookSearchResult from "components/ui/organisms/BookSearchResult";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import BookSearch from "components/ui/organisms/BookSearch";

export default function BookRecord({
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
      <section>
        {/* 책 검색창 */}
        <BookSearch
          onChange={onChange}
          onKeyDown={onKeyDown}
          query={query}
          onClick={onClick}
        />
        {/* 책 검색 결과 */}
        {bookData.length === 0 ? null : (
          <BookSearchResult
            save={save}
            bookData={bookData}
            addOnClick={addOnClick}
            convertPrice={convertPrice}
          />
        )}
      </section>
    </>
  );
}
