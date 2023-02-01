import { useEffect, useState } from "react";
import styled from "./Book.module.css";

function App() {
  const [query, setQuery] = useState('');
  const [bookData, setBookData] = useState([]);
  const onChange = (event) => {
    setQuery(event.target.value);
  };
  const request = {
    page: 1, // 결과 페이지 번호, 1~100 사이의 값, 기본 값 1
    size: 10, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
  }
  const getMovies = async () => {
    const response = await fetch(`https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${request.page}&size=${request.size}&query=${query}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'KakaoAK 74ea4aa39a2b0be9171454168fe7ca86',
      }
    });
    const json = await response.json();
    setBookData(json.documents);
  };
  useEffect(() => {
    if (query === '') {
      return
    } else if (query === '' || query === ' ' || query === '  ') {
      alert('검색어를 입력해 주세요.');
      setQuery('');
    } else {
      getMovies(); // 함수 실행
      setBookData('');
    }
  }, [query]) // [] 안에 있는 변수가 변하면 getMovies() 함수 실행

  return (
    <section>
      <div className={styled.bookSearch}>
        <h1>책 제목을 검색해보세요.</h1>
        <input
          onChange={onChange}
          value={query || ''}
          test="text"
          placeholder="예) 리액트를 다루는 기술, 이것이 자바다"
        />
      </div>
      <div>
        <ul className={styled.bookList}>
          {
            query === '' ?
            null :  
            bookData.length === 0 || bookData.length === ' ' ? 
            '' : 
            bookData.map((value, i) => {
              return (
                <li className={styled.item} key={i}>
                  <figure>
                    <img src={bookData[i].thumbnail} alt={bookData[i].title} />
                  </figure>
                  <div className={styled.boxContent}>
                    <strong className={styled.title}>{bookData[i].title}</strong>
                    <p className={styled.bookTitle}>책 소개: {bookData[i].contents}</p>
                    <p className={styled.price}>정상가격: <em>{`${bookData[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</em></p>
                    <p className={styled.sale_price}>할인가격: <em>{`${bookData[i].sale_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</em></p>
                    <p className={styled.authors}>저자: {bookData[i].authors[i]}</p>
                    <p className={styled.datetime}>최초 발행일: {`${bookData[i].datetime.substr(0, 4)}. ${bookData[i].datetime.substr(5, 2)}. ${bookData[i].datetime.substr(8, 2)}.`}</p>
                    <p className={styled.publisher}>출판사: {bookData[i].publisher}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  );
}

export default App;
