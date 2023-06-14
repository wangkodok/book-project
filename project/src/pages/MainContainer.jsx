// 컴포넌트
import VisualSlider from "components/main/VisualSlider";
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
      {/* 비주얼 슬라이드 */}
      <VisualSlider />

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
