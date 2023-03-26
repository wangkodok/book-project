import styled from "../style/MainVisualSlider.module.css";
import ApplePay from "../assets/main_visual_slider_00.png";
import Blockchain from "../assets/main_visual_slider_01.png";

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
