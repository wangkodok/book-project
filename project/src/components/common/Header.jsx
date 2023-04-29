// 라우터
import { Link } from "react-router-dom";

// 스타일 컴포넌트
import styled from "styled-components";

function Header() {
  return (
    <SectionHeader>
      <h1 className="blind">도서 검색 홈페이지</h1>
      <Inner>
        <Link to="/"></Link>
        <Gnb>
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
        </Gnb>
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

let Gnb = styled.nav``;

let List = styled.ul`
  display: flex;
`;

let Item = styled.li`
  margin: 0 24px 0 0;

  > a {
    font-size: 14px;
  }

  :last-child {
    margin: 0;
  }
`;
