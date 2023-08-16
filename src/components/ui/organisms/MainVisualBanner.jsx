import styled from "styled-components";

import Image from "components/ui/atoms/Image";
import AiBanner from "assets/main_visual_banner_ai.jpg";

export default function Banner() {
  return (
    <SectionBanner>
      <div className="inner">
        <h2 className="blind">메인 페이지 비주얼 배너 영역</h2>
        <Image
          src={AiBanner}
          alt={`비전공자도 이해할 수 있는 AI 지식, AI의 시대 지식을 습득해보세요.`}
        />
      </div>
    </SectionBanner>
  );
}

const SectionBanner = styled.section`
  background-color: #646682;

  .inner {
    width: 1320px;
    margin: 0 auto;
  }
`;
