import Inner from "StyledCommon";
import SubPageVisual from "components/SubPageVisual";
import Button from "components/ui/atoms/ButtonClick";
import styled from "styled-components";
import MapContainer from "map/Map";

import { useState } from "react";

export default function GuidePage() {
  const [buttonInnerText, setButtonInnerText] = useState();

  return (
    <>
      {SubPageVisual("서점안내", "서점 검색해 보세요.")}
      <SectionGuide>
        <Inner padding="80px 0">
          {/* <ul className="list">
            <li className="item">
              <Button
                innerText="교보문고"
                onClick={(e) => {
                  const innerText = e.target.innerText;
                  console.log(innerText);
                  setButtonInnerText(innerText);
                }}
                border="1px solid #000"
                padding="10px"
              />
            </li>
          </ul> */}
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
