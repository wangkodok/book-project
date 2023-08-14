const { default: styled } = require("styled-components");

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: ${(props) => props.padding};
`;

export default Inner;
