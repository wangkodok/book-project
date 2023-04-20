import { Link } from "react-router-dom";
import styled from "../../style/main/EventMore.module.css";

function EventMore() {
  return (
    <section>
      <div className={styled.inner}>
        <h1 className={styled.title}>이벤트</h1>

        {/* banner slider */}
        <div className={styled.bannerSlider}>
          <ul className={styled.EventMoreList}>
            <li>
              <Link to="">
                <figure>
                  <img src="https://via.placeholder.com/1200x200.jpg" alt="" />
                </figure>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EventMore;
