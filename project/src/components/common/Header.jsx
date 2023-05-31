// 라우터
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// 스타일 컴포넌트
import styled from "styled-components";

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
    <SectionHeader>
      <h1 className="blind">도서 검색 홈페이지</h1>
      <Inner>
        <Link
          to="/"
          onClick={() => {
            setMenuClick(false);
          }}
        ></Link>
        {/* <Gnb>
          <List className="list">
            <Item>
              <Link to="/best">베스트셀러</Link>
            </Item>
            <Item>
              <Link to="/event">이벤트</Link>
            </Item>
            <Item>
              <Link to="/ShoppingBasket">찜목록</Link>
            </Item>
          </List>
        </Gnb> */}
        <Hamburger>
          <MenuButton
            ref={clickRef}
            onClick={() => {
              if (menuClick) {
                setMenuClick(false);
              } else {
                setMenuClick(true);
              }
            }}
          >
            메뉴 보기
          </MenuButton>
          {menuClick === true ? (
            <HamburgerMenu className="on">
              <div>
                <ul>
                  <li>
                    <Link
                      to="/event"
                      onClick={() => {
                        setMenuClick(false);
                      }}
                    >
                      이벤트
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ShoppingBasket"
                      onClick={() => {
                        setMenuClick(false);
                      }}
                    >
                      찜목록
                    </Link>
                  </li>
                </ul>
              </div>
            </HamburgerMenu>
          ) : null}
        </Hamburger>
      </Inner>
    </SectionHeader>
  );
}

export default Header;

let SectionHeader = styled.header``;

let Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 0;

  > a {
    font-size: 18px;
    background-image: url("books_logo.png");
    background-repeat: no-repeat;
    background-size: auto 44px;
    background-position: center;
    width: 37px;
    height: 44px;
  }
`;

// 헤더 레이아웃 이전 꺼
// let Gnb = styled.nav``;

// let List = styled.ul`
//   display: flex;
// `;

// let Item = styled.li`
//   margin: 0 24px 0 0;

//   > a {
//     font-size: 14px;
//   }

//   :last-child {
//     margin: 0;
//   }
// `;

// 헤더 메뉴 버튼
let Hamburger = styled.div`
  position: relative;
`;

let MenuButton = styled.button`
  padding: 10px;
  border: 1px solid #000;
`;

let HamburgerMenu = styled.div`
  position: absolute;
  top: calc(100% - 1px);
  right: 0;
  left: 0;
  z-index: 1000;
  border: 1px solid #000;
  background-color: #fff;

  div {
  }

  ul {
  }

  li {
    color: #fff;

    &:last-child {
      margin: 0;
    }
  }

  a {
    padding: 4px 0;
    text-align: center;

    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
`;
