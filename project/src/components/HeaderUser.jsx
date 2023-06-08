import Logo from "components/common/Logo";
import HeaderUtil from "components/HeaderUtil";
import styled from "styled-components";

export default function HeaderUser({ setMenuClick }) {
  return (
    <User>
      <div className="inner">
        <div className="content">
          <Logo setMenuClick={setMenuClick} />
          <HeaderUtil />
        </div>
      </div>
    </User>
  );
}

const User = styled.div`
  .inner {
    width: 1200px;
    margin: 0 auto;
    padding: 32px 0;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

/* <Hamburger>
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
                  <li>
                    <Link
                      to="/BookReport"
                      onClick={() => {
                        setMenuClick(false);
                      }}
                    >
                      독후감
                    </Link>
                  </li>
                </ul>
              </div>
            </HamburgerMenu>
          ) : null}
        </Hamburger> */
