// 라우터
import { Routes, Route } from "react-router-dom";

// API 가져오기
import { URL } from "config";

// 리액트 훅
import { useState } from "react";

// 컴포넌트
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import MainContainer from "pages/MainContainer";
import Event from "components/event/Event";
import EventDetailPage from "components/event/EventDetailPage";
import ShoppingBasket from "pages/ShoppingBasket";
import BookReport from "pages/BookReport";
import BookReportPage from "pages/BookReportPage";
import BookRecordPage from "pages/BookRecordPage";
import BookList from "pages/BookList";
import BookListPage from "pages/BookListPage";
import Login from "pages/Login";

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
        <Route
          path="/"
          element={
            <MainContainer
              onChange={onChange}
              onKeyDown={onKeyDown}
              query={query}
              onClick={onClick}
              save={save}
              bookData={bookData}
              addOnClick={addOnClick}
              convertPrice={convertPrice}
            />
          }
        />

        {/* 이벤트 */}
        <Route path="/event" element={<Event />}>
          <Route path=":id" element={<EventDetailPage />} />
        </Route>

        {/* 찜목록 */}
        <Route
          path="/ShoppingBasket"
          element={
            <ShoppingBasket bookData={bookData} convertPrice={convertPrice} />
          }
        />

        {/* 독후감 */}
        <Route path="/BookReport" element={<BookReport />}>
          <Route path=":id" element={<BookReportPage />} />
        </Route>

        {/* 책기록 */}
        <Route
          path="/BookRecord"
          element={
            <BookRecordPage
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
        ></Route>

        <Route path="/BookRecord/BookList" element={<BookList />}>
          <Route path=":id" element={<BookListPage />} />
        </Route>

        <Route path="/Login" element={<Login />} />
      </Routes>

      {/* 푸터 */}
      <Footer />
    </>
  );
}

export default App;
