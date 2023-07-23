// 라우터
import { Routes, Route } from "react-router-dom";

// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { setBookDataList } from "store/states/BookDataList";

// API 가져오기
import { URL } from "config";

// 컴포넌트
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Main from "pages/Main";
import Event from "pages/Event";
import EventDetailPage from "pages/EventDetailPage";
import BookRecord from "pages/BookRecord";
import MyBooks from "pages/MyBooks";
import MyBookReviews from "pages/MyBookReviews";
import Login from "pages/Login";
import BookStore from "pages/BookStore";
import BookStoreGuide from "pages/BookStoreGuide";

export default function App() {
  const store = useSelector((state) => {
    return state;
  });
  // console.log(store);

  const dispatch = useDispatch();

  const request = {
    page: 1, // 결과 페이지 번호, 1~100 사이의 값, 기본 값 1
    size: 3, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
  };

  // 가격 , (콤마) 재사용 함수
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // api
  const api = (query) => {
    fetch(
      `${URL.KAKAO_BOOK}&page=${request.page}&size=${request.size}&query=${
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
        // console.log(data.documents);
        dispatch(setBookDataList(data.documents));
      });
  };

  // 검색 버튼 (Mouse Key)
  const onClick = () => {
    console.log("검색 버튼");

    if (store.queryValue.trim() !== "") {
      api(store.queryValue);
    }
  };

  return (
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

        {/* 책기록 */}
        <Route path="/book-record" element={<BookRecord onClick={onClick} />} />

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
