// 라우터
import { Link } from "react-router-dom";

// 이미지
import Logo from "assets/arrow.png";

// 스타일 컴포넌트
import styled from "styled-components";

function Footer() {
  return (
    <SectionFooter>
      <Inner>
        <ContentList>
          <FooterLogo></FooterLogo>
          <List>
            <Item>
              <Link to="/">북스 소개</Link>
            </Item>
            <Item>
              <Link to="/">이용약관</Link>
            </Item>
            <Item>
              <Link to="/">개인정보처리방침</Link>
            </Item>
          </List>
        </ContentList>
        <FamilySite>
          <FamilyButton>Family Site</FamilyButton>
        </FamilySite>
      </Inner>
    </SectionFooter>
  );
}

export default Footer;

let SectionFooter = styled.footer`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    background-color: #eee;
  }
`;

let Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

let ContentList = styled.div`
  display: flex;
  align-items: center;
`;

let FooterLogo = styled.span`
  background-image: url("/footer_books_logo.png");
  width: 37px;
  height: 44px;
  background-size: auto 44px;
  background-position: center;
  background-repeat: no-repeat;
`;

let List = styled.ul`
  display: flex;
  margin: 0 0 0 80px;
`;

let Item = styled.li`
  margin: 0 24px 0 0;
`;

let FamilySite = styled.div``;

let FamilyButton = styled.button`
  position: relative;
  width: 200px;
  height: 48px;
  padding: 11px 48px 11px 14px;
  border: 1px solid #000;
  text-align: left;
  border-radius: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translate(0, -50%);
    background-image: url(${Logo});
    background-size: auto 8px;
    background-repeat: no-repeat;
    width: 16px;
    height: 8px;
  }
`;
