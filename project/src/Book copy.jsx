import { useEffect, useState } from "react";
import styled from "./Book.module.css";
import Banner from "../src/Banner.png";

function App() {
  const request = {
    page: 1, // 결과 페이지 번호, 1~100 사이의 값, 기본 값 1
    size: 3, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
  };
  const [query, setQuery] = useState("");
  const [bookData, setBookData] = useState([]);
  const [size, setSize] = useState(request.size);
  const [save, setSave] = useState("");
  const [addButton, setAddButton] = useState(false);

  // input value 값 입력하면 query 저장
  const onChange = (event) => {
    setQuery(event.target.value);
  };

  // 더 보기 버튼
  const addOnClick = () => {
    console.log("더 보기 버튼");
    console.log(save);
    fetch(`https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${request.page}&size=${size + 3}&query=${save.trim() === "" ? "" : save}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "KakaoAK 74ea4aa39a2b0be9171454168fe7ca86",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setBookData(data.documents);
      setSize(size + 3);
      console.log(bookData);
    });
  };

  // 검색 버튼 (Enter Key)
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onClick();
    }
  };

  // 검색 버튼 (Mouse Click)
  const onClick = () => {
    console.log("검색 버튼");

    setQuery(query);
    setSave(query);
    setSize(3);
    setAddButton(true);
    setBookData([]);

    if (query.trim() !== "") {
      fetch(`https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${request.page}&size=${request.size}&query=${query.trim() === "" ? null : query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "KakaoAK 74ea4aa39a2b0be9171454168fe7ca86",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setBookData(data.documents);
        console.log(bookData);
      });
    }
  };
  useEffect(() => {
    console.log(bookData);
  }, [query, size, save, bookData]);

  return (
    <>
      <section className={styled.visual}>
        <div className={styled.content}>
          <figure>
            <img src={Banner} alt="" />
          </figure>
        </div>
      </section>
      <section>
        <div className={styled.bookSearch}>
          <h1>책 제목을 검색해보세요.</h1>
          <input
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={query}
            test="text"
            placeholder="예) 리액트를 다루는 기술, 이것이 자바다"
          />
          <button onClick={onClick}>검색</button>
        </div>
        <div className={styled.bookWrap}>
          {
            save === "" ? 
            null : (
            <ul className={styled.bookList}>
              {
                bookData.map((value, i) => {
                  return (
                    <li className={styled.item} key={i}>
                      <figure>
                        <img src={bookData[i].thumbnail} alt={bookData[i].title} />
                      </figure>
                      <div className={styled.boxContent}>
                        <strong className={styled.title}>{bookData[i].title}</strong>
                        <p className={styled.bookTitle}>책 소개: {bookData[i].contents}</p>
                        <p className={styled.price}>정상가격:{" "}<em>{`${bookData[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</em></p>
                        <p className={styled.sale_price}>할인가격:{" "}<em>{`${bookData[i].sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</em></p>
                        <p className={styled.authors}>저자: {bookData[i].authors[i]}</p>
                        <p className={styled.datetime}>최초 발행일:{" "}{`${bookData[i].datetime.substr(0, 4)}. ${bookData[i].datetime.substr(5, 2)}. ${bookData[i].datetime.substr(8, 2)}.`}</p>
                        <p className={styled.publisher}>출판사: {bookData[i].publisher}</p>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          )}
          {
            save === "" ? 
            null : 
            bookData.length === 0 ? 
            (
              <>
                <p><strong>"{save}"</strong>에 대한 검색결과가 없습니다.</p>
                <p>ㆍ검색어의 철자가 정확한지 확인해주세요.</p>
                <p>ㆍ비슷한 다른 검색어를 입력해보세요.</p>
                <p>ㆍ단어의 수를 줄여보세요.</p>
              </>
            ) : 
            addButton === false ? 
            null : 
            (
              <button className={styled.itemAddButton} onClick={addOnClick}>더 보기</button>
            )
          }
        </div>
      </section>
    </>
  );
}

export default App;
