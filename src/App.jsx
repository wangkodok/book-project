import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { URL } from "config";
import { setBookDataList } from "store/states/BookDataList";
import { setToggleBoolean } from "store/states/ToggleBoolean";
import { setNoSearchResults } from "store/states/NoSearchResults";
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

  const dispatch = useDispatch();

  const request = {
    page: 1, // 결과 페이지 번호, 1~100 사이의 값, 기본 값 1
    size: 3, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
  };

  useEffect(() => {
    if (store.toggleBoolean === true) {
      fetch(
        `${URL.KAKAO_BOOK}&page=${request.page}&size=${request.size}&query=${store.queryValue}`,
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
          if (store.bookDataList.length === 0) {
            dispatch(setNoSearchResults("<div>test</div>"));
          }

          console.log(data.documents);
          dispatch(setBookDataList(data.documents));
          dispatch(setToggleBoolean(false));
        });
    }
  }, [store.toggleBoolean, store.queryValue]);

  const onClick = () => {
    if (store.queryValue === "") {
      alert("입력하지 않았습니다.");
      return;
    }

    dispatch(setToggleBoolean(true));
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/event" element={<Event />}>
          <Route path=":id" element={<EventDetailPage />} />
        </Route>

        <Route path="/book-record" element={<BookRecord onClick={onClick} />} />

        <Route path="/book-record/my-books" element={<MyBooks />}>
          <Route path=":id" element={<MyBookReviews />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/bookstore" element={<BookStore />} />

        <Route path="/bookstore-guide" element={<BookStoreGuide />} />
      </Routes>

      <Footer />
    </>
  );
}
