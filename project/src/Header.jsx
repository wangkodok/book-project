import { Link } from 'react-router-dom';
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrap>
      <h1 className="blind">도서 검색 홈페이지</h1>
      <DivInner>
        <Link to="/book-project">Home</Link>
        <DivGnbWrap>
          <UlList className="list">
            <LiItem>
              <Link to="/best">베스트셀러</Link>
            </LiItem>
            <LiItem>
              <Link to="/event">이벤트</Link>
            </LiItem>
          </UlList>
        </DivGnbWrap>
      </DivInner>
    </HeaderWrap>
  )
}

export default Header

let HeaderWrap = styled.header``

let DivInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px;
  
  > a {
    font-size: 18px;
  }
`

let DivGnbWrap = styled.div``

let UlList = styled.ul`
  display: flex;
`

let LiItem = styled.li`
  > a {
    padding: 0 5px;
    margin: 0 5px 0 0;
    font-size: 19px;
  }

  :last-child {
    > a {
      margin: 0;
    }
  }
`
