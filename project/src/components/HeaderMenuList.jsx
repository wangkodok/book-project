import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HeaderMenuList() {
  return (
    <List className="list">
      <li className="item">
        <Link href="/" className="link">
          사용안내
        </Link>
      </li>
      <li className="item">
        <Link href="/" className="link">
          내서재
        </Link>
      </li>
      <li className="item">
        <Link href="/" className="link">
          책기록
        </Link>
      </li>
      <li className="item">
        <Link href="/" className="link">
          이벤트
        </Link>
      </li>
      <li className="item">
        <Link href="/" className="link">
          AI추천서비스
        </Link>
      </li>
      <li className="item">
        <Link href="/" className="link">
          서점안내
        </Link>
      </li>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 0 0 24px;

  .item {
    margin: 0 28px 0 0;
  }

  .link {
    font-size: 16px;
    line-height: 23px;
  }
`;
