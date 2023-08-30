import { useSelector } from "react-redux";

import SubPageVisual from "components/ui/atoms/SubPageVisual";
import BookSearchResult from "components/ui/organisms/BookSearchResult";
import BookSearch from "components/ui/organisms/BookSearch";
import Inner from "StyledCommon";

export default function BookRecord({ onClick }) {
  const store = useSelector((state) => {
    return state;
  });

  function BookDataList() {
    if (store.bookDataList.length === 0) {
      return (
        <Inner>
          <div>{store.NoSearchResults}</div>
        </Inner>
      );
    }

    if (store.bookDataList.length !== 0) {
      return <BookSearchResult />;
    }
  }

  return (
    <>
      <SubPageVisual
        title="책 기록"
        desc="읽었던 책을 검색하고, 저장하여 기록하세요."
      />
      <section>
        <BookSearch onClick={onClick} />
        <BookDataList />
      </section>
    </>
  );
}
