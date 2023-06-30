import styled from "styled-components";

export default function SectionTitle({ innerText }) {
  return <H3>{innerText}</H3>;
}

const H3 = styled.h3`
  margin: 0 0 40px 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 41px;
`;
