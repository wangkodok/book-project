// 컴포넌트
import Banner from "components/ui/organisms/Banner";
import BookSearch from "components/main/BookSearch";
import EventBanner from "components/main/EventBanner";

function Content({
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
      {/* 메인 본문 배너 */}
      <Banner />

      {/* 책 검색 */}
      <BookSearch
        onChange={onChange}
        onKeyDown={onKeyDown}
        query={query}
        onClick={onClick}
        save={save}
        bookData={bookData}
        addOnClick={addOnClick}
        convertPrice={convertPrice}
      />

      {/* 이벤트 배너 */}
      {/* <EventBanner /> */}
    </>
  );
}

export default Content;
