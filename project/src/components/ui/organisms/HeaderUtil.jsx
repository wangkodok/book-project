import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HeaderUtil() {
  return (
    <Util>
      <ul className="list">
        <li className="item">
          <Link to="/Login" className="link">
            로그인/회원가입
          </Link>
        </li>
        <li className="item">
          <Link to="/ListBookSites" className="link">
            서점사이트보기
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
