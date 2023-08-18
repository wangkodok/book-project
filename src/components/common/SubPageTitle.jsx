// import styled from "style/cart/ShoppingBasket.module.css";
import styled from "styled-components";

export default function SubPageTitle({ title, desc }) {
  return (
    <TitleWrap>
      <h2>{title}</h2>
      <p>{desc}</p>
    </TitleWrap>
  );
}

const TitleWrap = styled.div`
  padding: 20px 0;
  margin: 0 0 40px 0;

  h2 {
    margin: 0 0 12px 0;
    font-size: 40px;
    font-weight: 700;
  }

  p {
    font-size: 20px;
  }
`;
