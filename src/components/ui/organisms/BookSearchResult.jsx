import { useSelector } from "react-redux";
import styled from "styled-components";

import ButtonCheck from "components/ui/atoms/ButtonCheck";
import ButtonSave from "components/ui/atoms/ButtonSave";
import ButtonClick from "components/ui/atoms/ButtonClick";
import Image from "components/ui/atoms/Image";
import Badge from "components/ui/atoms/Badge";
import Check from "assets/desc-check.jpg";

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

  return (
    <>
      {store.NoSearchResultsv}
      <BookWrap>
        <ul className="bookList">
          {store.bookDataList.map((value, i) => {
            return (
              <li className="item" key={i}>
                <Image
                  src={
                    store.bookDataList[i].thumbnail === ""
                      ? "https://via.placeholder.com/120x174"
                      : store.bookDataList[i].thumbnail
                  }
                  alt={store.bookDataList[i].title}
                />
                <div className="boxContent">
                  <div>
                    <Price bookDataList={store.bookDataList} i={i} />
                    <h4 className="title">{store.bookDataList[i].title}</h4>
                    <p className="bookTitle">
                      {" "}
                      {store.bookDataList[i].contents === ""
                        ? null
                        : `${store.bookDataList[i].contents}`}
                    </p>
                  </div>
                  <div className="sale">
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
        <div className="desc-text">
          <p>표시하고 “내 서재 저장” 해보세요.</p>
        </div>
        <div className="book-save">
          <ButtonClick
            innerText="내 서재 저장"
            color="#000"
            border="1px solid #000"
            padding="9px 34px"
          />
        </div>
      </BookWrap>
    </>
  );
}

const BookWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;

  .bookList {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .bookList .item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 40px;
  }

  .bookList .item::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: #000;
  }

  .bookList .item:last-child::after {
    content: none;
  }

  .bookList .sold-out {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f33b2d;
    padding: 4px 6px;
    color: #fff;
    font-size: 12px;
  }

  .boxContent {
    display: flex;
    align-content: flex-end;
    flex-direction: column;
    margin: 0 0 0 32px;
    overflow: hidden;
  }

  .boxContent .title {
    display: block;
    margin: 0 0 10px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
  }

  .boxContent .bookTitle {
    line-height: 23px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .boxContent .sale {
    margin: 42px 0 0 0;
  }

  .boxContent .sale button {
    margin: 0 8px 0 0;
    padding: 10px 28px;
    line-height: 20px;
  }

  /* .boxContent .sale button:hover {
  background-color: #000;
  color: #fff;
} */

  .boxContent .sale .item-sold-out {
    border: 1px solid #000;
    margin: 0 10px 0 0;
    padding: 10px;
  }

  .boxContent .sale .item-sold-out:hover {
    background-color: #000;
    color: #fff;
  }

  .desc-text {
    margin: 10px 0 0 0;
  }
  .desc-text p {
    padding: 0 0 0 40px;
    background-image: url("${Check}");
    background-size: auto 20px;
    background-repeat: no-repeat;
    background-position: 10px 2px;
  }

  .book-save {
    margin: 10px 0 0 0;
    text-align: center;
  }
`;
