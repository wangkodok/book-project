import { useEffect, useState } from "react";
import EventMore from "../components/EventMore";
import MainVisualSlider from "../components/MainVisualSlider";
import BookSearch from "../components/BookSearch";

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
    fetch(
      `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${
        request.page
      }&size=${size + 3}&query=${save.trim() === "" ? "" : save}`,
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
        `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${
          request.page
        }&size=${request.size}&query=${query.trim() === "" ? null : query}`,
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
  }, [query, size, save, bookData]);

  return (
    <>
      <MainVisualSlider />
      <BookSearch
        onChange={onChange}
        onKeyDown={onKeyDown}
        query={query}
        onClick={onClick}
        save={save}
        bookData={bookData}
        addButton={addButton}
        addOnClick={addOnClick}
      />
      <EventMore />
    </>
  );
}

export default App;
