// 라우터
import { Routes, Route } from "react-router-dom";

// API 가져오기
import { URL } from "config";

// 리액트 훅
import { useState } from "react";

// 컴포넌트
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Main from "pages/Main";
import Event from "pages/Event";
import EventDetailPage from "pages/EventDetailPage";
// import ShoppingBasket from "pages/ShoppingBasket";
// import BookReport from "pages/BookReport";
// import BookReportPage from "pages/BookReportPage";
import BookRecord from "pages/BookRecord";
import MyBooks from "pages/MyBooks";
import MyBookReviews from "pages/MyBookReviews";
import Login from "pages/Login";
import BookStore from "pages/BookStore";
import BookStoreGuide from "pages/BookStoreGuide";

function App() {
  const request = {
    page: 1, // 결과 페이지 번호, 1~100 사이의 값, 기본 값 1
    size: 3, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
  };
  const [query, setQuery] = useState("");
  const [save, setSave] = useState("");
  const [size, setSize] = useState("");
  const [bookData, setBookData] = useState([]);
  const [copyBookData, setCopyBookData] = useState(bookData);

  // 가격 , (콤마) 재사용 함수
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // input value 값 입력하면 query 저장
  const onChange = (event) => {
    setQuery(event.target.value);
  };

  // api
  const api = (page, size, query) => {
    fetch(
      `${URL.KAKAO_BOOK}&page=${page}&size=${size}&query=${
        query.trim() === "" ? null : query
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `KakaoAK ${process.env.REACT_APP_SERIAL_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.documents);
        setBookData(data.documents);
        setSize(size);

        for (let index = 0; index < copyBookData.length; index++) {
          copyBookData[index].itemCount = 1;
        }
      });
  };

  // 더 보기 버튼
  const addOnClick = () => {
    console.log("더 보기 버튼");

    api(request.page, size + request.size, save);
  };

  // 검색 버튼 (Enter Key)
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onClick();
    }
  };

  // 검색 버튼 (Mouse Click)
  const onClick = () => {
    console.log("검색 버튼");

    setQuery(query);
    setSave(query);

    if (query.trim() !== "") {
      api(request.page, request.size, query);
    }
  };

  return (
    // 메인 페이지
    <>
      {/* 헤더 */}
      <Header />

      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Main />} />

        {/* 이벤트 */}
        <Route path="/event" element={<Event />}>
          <Route path=":id" element={<EventDetailPage />} />
        </Route>

        {/* 찜목록 */}
        {/* <Route
          path="/ShoppingBasket"
          element={
            <ShoppingBasket bookData={bookData} convertPrice={convertPrice} />
          }
        /> */}

        {/* 독후감 */}
        {/* <Route path="/BookReport" element={<BookReport />}>
          <Route path=":id" element={<BookReportPage />} />
        </Route> */}

        {/* 책기록 */}
        <Route
          path="/book-record"
          element={
            <BookRecord
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={query}
              onClick={onClick}
              save={save}
              bookData={bookData}
              addOnClick={addOnClick}
              convertPrice={convertPrice}
            />
          }
        />

        {/* 책기록 > 내가 읽었던 책들 */}
        <Route path="/book-record/my-books" element={<MyBooks />}>
          {/* 책기록 > 내가 읽었던 책들 > 내가 읽었던 책 독후감 작성 */}
          <Route path=":id" element={<MyBookReviews />} />
        </Route>

        {/* 로그인/회원가입 */}
        <Route path="/login" element={<Login />} />

        {/* 도서 온라인 사이트 */}
        <Route path="/bookstore" element={<BookStore />} />

        {/* 서점안내 */}
        <Route path="/bookstore-guide" element={<BookStoreGuide />} />
      </Routes>

      {/* 푸터 */}
      <Footer />
    </>
  );
}

export default App;
