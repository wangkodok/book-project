import Inner from "StyledCommon";
import styled from "styled-components";

export default function SubPageVisual(title, desc) {
  return (
    <SectionSubPageVisual>
      <Inner padding="78px 0">
        <div className="text-wrap">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </Inner>
    </SectionSubPageVisual>
  );
}

const SectionSubPageVisual = styled.section`
  background-color: #eee;

  .text-wrap {
    text-align: center;

    h3 {
      font-size: 28px;
      font-weight: 500;
      line-height: 41px;
      margin: 0 0 20px 0;
    }
    p {
      font-size: 16px;
      line-height: 23px;
    }
  }
`;
