import { useEffect, useState } from "react";
import styled from "./Book.module.css";
import Banner from "../src/Banner.png"

function App() {
  const [query, setQuery] = useState('');
  const [bookData, setBookData] = useState([]);
  const [boxList, setBookList] = useState([]);
  const [queryText, setQueryText] = useState('');
  const onChange = (event) => {
    setQuery(event.target.value);
  };
  const onKeyDown = (event) => {
    if(event.keyCode === 13) {
      onClick();
    }
  };
  const request = {
    page: 1, // 결과 페이지 번호, 1~100 사이의 값, 기본 값 1
    size: 3, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
  }
  const onClick = async () => {
    if (query.trim() !== '') {
      fetch(`https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${request.page}&size=${request.size}&query=${queryText}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'KakaoAK 74ea4aa39a2b0be9171454168fe7ca86',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setBookList(data.documents);
        console.log(bookData);
      });
    } else if (query === '') {
      console.log('입력되지 않았습니다.');
    } else {
      console.log('검색어를 다시 입력해주세요.');
      return
    }
  };
  useEffect(() => {
    fetch(`https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${request.page}&size=${request.size}&query=${query.trim() === '' ? null : query}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'KakaoAK 74ea4aa39a2b0be9171454168fe7ca86',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setBookData(data.documents);
      setQueryText(query)
    });
  }, [query]);

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
          <ul className={styled.bookList}>
            {
              boxList === undefined ? 
              null :
              boxList.map((value, i) => {
                return (
                  <li className={styled.item} key={i}>
                    <figure>
                      <img src={boxList[i].thumbnail} alt={boxList[i].title} />
                    </figure>
                    <div className={styled.boxContent}>
                      <strong className={styled.title}>{boxList[i].title}</strong>
                      <p className={styled.bookTitle}>책 소개: {boxList[i].contents}</p>
                      <p className={styled.price}>정상가격: <em>{`${boxList[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</em></p>
                      <p className={styled.sale_price}>할인가격: <em>{`${boxList[i].sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</em></p>
                      <p className={styled.authors}>저자: {boxList[i].authors[i]}</p>
                      <p className={styled.datetime}>최초 발행일: {`${boxList[i].datetime.substr(0, 4)}. ${boxList[i].datetime.substr(5, 2)}. ${boxList[i].datetime.substr(8, 2)}.`}</p>
                      <p className={styled.publisher}>출판사: {boxList[i].publisher}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
