import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HeaderUtil() {
  return (
    <UtilWrapper>
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
    </UtilWrapper>
  );
}

const UtilWrapper = styled.div`
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

// let List = styled.ul``;

// let Item = styled.li`
//   > a {
//   }

//   :last-child {
//     margin: 0;
//   }
// `;
