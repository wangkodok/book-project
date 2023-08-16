import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "assets/books_logo.png";

export default function Logo({ setMenuClick }) {
  return (
    <LogoLink
      to="/"
      onClick={() => {
        setMenuClick(false);
      }}
    ></LogoLink>
  );
}

const LogoLink = styled(Link)`
  width: 37px;
  height: 44px;
  font-size: 18px;
  background-image: url(${HeaderLogo});
  background-repeat: no-repeat;
  background-size: auto 44px;
  background-position: center;
`;
