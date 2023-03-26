import Banner from "../assets/Banner.png";
import styled from "../style/MainVisualSlider.module.css";

function MainVisualSlider() {
  return (
    <section className={styled.visual}>
      <div className={styled.content}>
        <figure>
          <img src={Banner} alt="" />
        </figure>
      </div>
    </section>
  );
}

export default MainVisualSlider;
