// 컴포넌트
import ButtonCheck from "components/ui/atoms/ButtonCheck";
import ButtonSave from "components/ui/atoms/ButtonSave";
import ButtonClick from "components/ui/atoms/ButtonClick";
import Image from "components/ui/atoms/Image";

// CSS 모듈
import styled from "style/main/BookSearchResult.module.css";

// 책 검색 후 목록에 나오는 배지
function Price({ bookData, i }) {
  if (bookData[i].price.toString() > 20000) {
    return <strong className={styled.md}>MD추천</strong>;
  } else {
    return <strong className={styled.md}>Book</strong>;
  }
}

export default function BookSearchResult({ save, bookData }) {
  return (
    <>
      <div className={styled.bookWrap}>
        {save === "" ? null : (
          <ul className={styled.bookList}>
            {bookData.map((value, i) => {
              return (
                <li className={styled.item} key={i}>
                  <Image
                    src={
                      bookData[i].thumbnail === ""
                        ? "https://via.placeholder.com/120x174"
                        : bookData[i].thumbnail
                    }
                    alt={bookData[i].title}
                  />
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
                      <ButtonSave bookData={bookData} i={i}></ButtonSave>
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
        )}
        <div className={styled["desc-text"]}>
          <p>표시하고 “내 서재 저장” 해보세요.</p>
        </div>
        <div className={styled["book-save"]}>
          <button>내 서재 저장</button>
        </div>
      </div>
    </>
  );
}
