// 리덕스
import { useSelector } from "react-redux";

// 컴포넌트
import ButtonCheck from "components/ui/atoms/ButtonCheck";
import ButtonSave from "components/ui/atoms/ButtonSave";
import ButtonClick from "components/ui/atoms/ButtonClick";
import Image from "components/ui/atoms/Image";
import Badge from "components/ui/atoms/Badge";

// CSS 모듈
import styled from "style/main/BookSearchResult.module.css";

// 책 검색 후 목록에 나오는 배지
function Price({ bookDataList, i }) {
  if (bookDataList[i].price.toString() > 20000) {
    return <Badge innerText="MD추천"></Badge>;
  } else {
    return <Badge innerText="Book"></Badge>;
  }
}

export default function BookSearchResult() {
  const store = useSelector((state) => {
    return state;
  });
  console.log(store);

  return (
    <>
      {store.NoSearchResultsv}
      <div className={styled.bookWrap}>
        <ul className={styled.bookList}>
          {store.bookDataList.map((value, i) => {
            return (
              <li className={styled.item} key={i}>
                <Image
                  src={
                    store.bookDataList[i].thumbnail === ""
                      ? "https://via.placeholder.com/120x174"
                      : store.bookDataList[i].thumbnail
                  }
                  alt={store.bookDataList[i].title}
                />
                <div className={styled.boxContent}>
                  <div>
                    <Price bookDataList={store.bookDataList} i={i} />
                    <h4 className={styled.title}>
                      {store.bookDataList[i].title}
                    </h4>
                    <p className={styled.bookTitle}>
                      {" "}
                      {store.bookDataList[i].contents === ""
                        ? null
                        : `${store.bookDataList[i].contents}`}
                    </p>
                  </div>
                  <div className={styled.sale}>
                    <ButtonSave
                      bookData={store.bookDataList}
                      i={i}
                    ></ButtonSave>
                    <ButtonClick
                      innerText="서점 찾기"
                      color="#b8883b"
                      boxShadow="0 0 0 1px #b8883b inset"
                    />
                  </div>
                </div>
                <ButtonCheck></ButtonCheck>
              </li>
            );
          })}
        </ul>
        <div className={styled["desc-text"]}>
          <p>표시하고 “내 서재 저장” 해보세요.</p>
        </div>
        <div className={styled["book-save"]}>
          <ButtonClick
            innerText="내 서재 저장"
            color="#000"
            border="1px solid #000"
            padding="9px 34px"
          />
        </div>
      </div>
    </>
  );
}
