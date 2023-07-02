import styled from "styled-components";

export default function Badge({ innerText }) {
  return <Span>{innerText}</Span>;
}

const Span = styled.span`
  display: inline-block;
  padding: 0px 14px;
  margin: 0 0 10px 0;
  font-size: 12px;
  font-weight: 500;
  vertical-align: top;
  border: 1px solid #000;
`;
