import { Link } from "react-router-dom";
import styled from "../../style/main/EventMore.module.css";

// 배너 이미지
import EventImg00 from "../../../src/assets/event_slider_banner_00.jpg";
import EventImg01 from "../../../src/assets/event_slider_banner_01.jpg";

// 스와이퍼 리액트 컴포넌트, CSS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Autoplay]);

function EventMore() {
  return (
    <section>
      <div className={styled.inner}>
        <h1 className={styled.title}>이벤트</h1>

        {/* 이벤트 배너 슬라이더 */}
        <div>
          <Swiper
            className={styled.swiperList}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            // autoplay={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className={styled.swiperItem}>
              <div>
                <figure>
                  <img
                    styled={styled.bannerImg}
                    src={`${EventImg00}/`}
                    alt="챗 GPT 사용해보세요."
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styled.swiperItem}>
              <div>
                <figure styled={styled.bannerArea}>
                  <img
                    styled={styled.bannerImg}
                    src={`${EventImg01}`}
                    alt="신규 회원가입 할인쿠폰 증정"
                  />
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default EventMore;
