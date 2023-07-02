import AllMenu from "assets/all-menu.png";
import HeaderMenuList from "components/ui/molecules/HeaderMenuList";

import styled from "styled-components";

export default function HeaderMenu() {
  return (
    <Gnb>
      <div className="inner">
        <div className="gnb-content">
          <button className="all-menu">전체메뉴</button>
          <HeaderMenuList />
        </div>
      </div>
    </Gnb>
  );
}

const Gnb = styled.div`
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    background-color: #eee;
  }

  .inner {
    width: 1200px;
    margin: 0 auto;
    padding: 36px 0;
  }

  .gnb-content {
    display: flex;
  }

  .all-menu {
    border: 1px solid #000;
    padding: 12px 12px 12px 48px;
    background-image: url(${AllMenu});
    background-repeat: no-repeat;
    background-size: auto 15px;
    background-position: 12px 50%;
  }
`;
