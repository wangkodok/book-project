import { useState } from "react";
import styled from "styled-components";

import SubPageVisual from "components/ui/atoms/SubPageVisual";
import MapContainer from "map/Map";
import Inner from "StyledCommon";

export default function GuidePage() {
  const [buttonInnerText, setButtonInnerText] = useState();

  return (
    <>
      {SubPageVisual("서점안내", "서점 검색해 보세요.")}
      <SectionGuide>
        <Inner padding="80px 0">
          <MapContainer buttonInnerText={buttonInnerText}></MapContainer>
        </Inner>
      </SectionGuide>
    </>
  );
}

const SectionGuide = styled.section`
  .list {
    display: flex;
  }

  .item {
    width: calc(100% / 6);
    margin: 0 28px 0 0;

    &:nth-last-child(6n) {
      margin: 0;
    }

    button {
      width: 100%;
    }
  }
`;
