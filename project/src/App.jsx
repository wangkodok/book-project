import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainContainer from "./pages/MainContainer"; // 메인 페이지 컨테이너
import Event from "./components/event/Event";
import EventDetailPage from "./components/event/EventDetailPage";
import ShoppingBasket from "./pages/ShoppingBasket";
import { URL } from "./config"; // API 가져오기

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

  // 가격 , (콤마) 재사용 함수
  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // input value 값 입력하면 query 저장
  const onChange = (event) => {
    setQuery(event.target.value);
  };

  // 더 보기 버튼
  const addOnClick = () => {
    console.log("더 보기 버튼");
    console.log(save);
    fetch(
      `${URL.KAKAO_API}&page=${request.page}&size=${size + 3}&query=${
        save.trim() === "" ? "" : save
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "KakaoAK 74ea4aa39a2b0be9171454168fe7ca86",
        },
      }
    )
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
      event.preventDefault();
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
      fetch(
        `${URL.KAKAO_API}&page=${request.page}&size=${request.size}&query=${
          query.trim() === "" ? null : query
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "KakaoAK 74ea4aa39a2b0be9171454168fe7ca86",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setBookData(data.documents);
          console.log(bookData);
        });
    }
  };
  useEffect(() => {
    console.log(bookData);
    for (let index = 0; index < bookData.length; index++) {
      bookData[index].itemCount = 1;
    }
  }, [query, size, save, bookData]);

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
      </Routes>

      {/* 푸터 */}
      <Footer />
    </>
  );
}

export default App;
