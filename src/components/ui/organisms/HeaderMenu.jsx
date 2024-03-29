import styled from "styled-components";

import ButtonClick from "components/ui/atoms/ButtonClick";
import HeaderMenuList from "components/ui/molecules/HeaderMenuList";
import Inner from "StyledCommon";
import AllMenu from "assets/all-menu.png";

export default function HeaderMenu() {
  return (
    <Gnb>
      <Inner padding="36px 0">
        <GnbWrap>
          <ButtonClick
            innerText="전체메뉴"
            padding="12px 12px 12px 48px"
            border="1px solid #000"
            backgroundImage={`url(${AllMenu})`}
            backgroundRepeat="no-repeat"
            backgroundSize="auto 15px"
            backgroundPosition="12px 50%"
          />
          <HeaderMenuList />
        </GnbWrap>
      </Inner>
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
`;

const GnbWrap = styled.div`
  display: flex;
`;
