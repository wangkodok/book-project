import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HeaderUtil() {
  return (
    <Util>
      <ul className="list">
        <li className="item">
          <Link to="/login" className="link">
            로그인/회원가입
          </Link>
        </li>
        <li className="item">
          <Link to="/bookstore" className="link">
            도서 쇼핑몰 사이트
          </Link>
        </li>
      </ul>
    </Util>
  );
}

const Util = styled.div`
  .list {
    display: flex;

    .item {
      margin: 0 24px 0 0;

      .link {
        font-size: 14px;
      }

      :last-child {
        margin: 0;
      }
    }
  }
`;
