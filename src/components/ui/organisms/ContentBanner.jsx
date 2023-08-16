import { Link } from "react-router-dom";
import styled from "styled-components";

import Inner from "StyledCommon";
import ContentBanner from "assets/main_content_banner.jpg";

export default function Banner() {
  return (
    <SectionBanner>
      <h3 className="blind">콘텐츠 배너 영역</h3>
      <Inner className="inner-banner">
        <div className="text-box">
          <h4 className="title">이제, 온라인에서도 책 읽고 기록하세요</h4>
          <Link to="/book-record" className="title-link">
            기록하러 가기
          </Link>
        </div>
      </Inner>
    </SectionBanner>
  );
}

const SectionBanner = styled.section`
  margin: 60px 0;
  background-color: #fdd2d9;

  .inner-banner {
    position: relative;
  }

  .text-box {
    padding: 63px 0;
    text-align: center;
    box-sizing: border-box;
    background-image: url(${ContentBanner});
    background-repeat: no-repeat;

    .title {
      font-size: 28px;
      margin: 0 0 20px 0;
      line-height: 41px;
    }

    .title-link {
      display: inline-block;
      font-size: 20px;
      padding: 11px 22px;
      border: 1px solid #000;
      line-height: 29px;
    }
  }
`;
