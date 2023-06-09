// 이미지 불러오기
// import ApplePay from "assets/main_visual_slider_00.png";
// import Blockchain from "assets/main_visual_slider_01.png";
import AiBanner from "assets/main_visual_banner_ai.jpg";
import styled from "styled-components";

export default function MainVisualSlider() {
  return (
    <SectionVisual>
      <div className="inner">
        <h2 className="blind">메인 페이지 배너</h2>
        <figure>
          <img
            src={AiBanner}
            alt="가상화폐의 주역, 블록체인 기술 컴퓨터 기술 기반의 데이터 위변조 방지 기술을 배워보세요."
          />
        </figure>
      </div>
    </SectionVisual>
  );
}

const SectionVisual = styled.section`
  background-color: #646682;

  .inner {
    width: 1320px;
    margin: 0 auto;
  }
`;
