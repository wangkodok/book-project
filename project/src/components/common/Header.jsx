// 리액트 훅
import { useEffect, useRef, useState } from "react";

// 컴포넌트
import HeaderUser from "components/ui/organisms/HeaderUser";
import HeaderMenu from "components/ui/organisms/HeaderMenu";

// 스타일 컴포넌트
// import styled from "styled-components";

function Header() {
  const [menuClick, setMenuClick] = useState(false);
  const clickRef = useRef();

  useEffect(() => {
    const handleOutsideClose = (e) => {
      // useRef current 에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (menuClick && !clickRef.current.contains(e.target))
        setMenuClick(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [menuClick]);

  return (
    <header>
      <h1 className="blind">도서 기록 홈페이지</h1>
      <HeaderUser setMenuClick={setMenuClick} />
      <HeaderMenu />
    </header>
  );
}

export default Header;

// let HeaderWrapper = styled.header``;

// let Inner = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 22px 0;
// `;

// // 헤더 메뉴 버튼
// let Hamburger = styled.div`
//   position: relative;
// `;

// let MenuButton = styled.button`
//   padding: 10px;
//   border: 1px solid #000;
// `;

// let HamburgerMenu = styled.div`
//   position: absolute;
//   top: calc(100% - 1px);
//   right: 0;
//   left: 0;
//   z-index: 1000;
//   border: 1px solid #000;
//   background-color: #fff;

//   div {
//   }

//   ul {
//   }

//   li {
//     color: #fff;

//     &:last-child {
//       margin: 0;
//     }
//   }

//   a {
//     padding: 4px 0;
//     text-align: center;

//     &:hover {
//       color: #fff;
//       background-color: #000;
//     }
//   }
// `;
