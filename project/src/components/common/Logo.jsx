// import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Logo({ setMenuClick }) {
  // const [menuClick, setMenuClick] = useState(false);
  // const clickRef = useRef();

  // useEffect(() => {
  //   const handleOutsideClose = (e) => {
  //     // useRef current 에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
  //     if (menuClick && !clickRef.current.contains(e.target))
  //       setMenuClick(false);
  //   };
  //   document.addEventListener("click", handleOutsideClose);

  //   return () => document.removeEventListener("click", handleOutsideClose);
  // }, [menuClick]);

  return (
    <LogoLink
      to="/"
      onClick={() => {
        setMenuClick(false);
      }}
    ></LogoLink>
  );
}

const LogoLink = styled(Link)`
  width: 37px;
  height: 44px;
  font-size: 18px;
  background-image: url("/books_logo.png");
  background-repeat: no-repeat;
  background-size: auto 44px;
  background-position: center;
`;
