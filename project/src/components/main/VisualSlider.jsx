// 이미지 불러오기
import ApplePay from "assets/main_visual_slider_00.png";
// import Blockchain from "assets/main_visual_slider_01.png";

// CSS 모듈
import styled from "style/main/VisualSlider.module.css";

function MainVisualSlider() {
  return (
    <section className={styled.visual}>
      <div className={styled.content}>
        <figure>
          <img src={ApplePay} alt="" />
        </figure>
      </div>
    </section>
  );
}

export default MainVisualSlider;
