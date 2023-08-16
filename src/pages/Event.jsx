import { Outlet, Link, useParams } from "react-router-dom";

import eventData from "eventData";
import SubPageTitle from "components/common/SubPageTitle";
import styled from "style/event/Event.module.css";

function Event() {
  const { id } = useParams();
  const findProduct = eventData.find(function (obj) {
    return obj.id === Number(id);
  });

  return (
    <section className={styled.event}>
      <div className={styled.inner}>
        {SubPageTitle("이벤트", "재미있는 이벤트를 즐겨보세요.")}
      </div>
      <div className={styled.event_list_wrap}>
        <Outlet></Outlet> {/* 이벤트에서 해당하는 페이지 */}
        {findProduct !== undefined ? null : (
          <ul className={styled.event_list}>
            {eventData.map((value, i) => {
              return eventData[i].title === "not open" ? null : (
                <li key={i} className={styled.item}>
                  <Link to={`/event/${eventData[i].id}`}>
                    <figure className={styled.figure}>
                      <img
                        src={eventData[i].thumbnail}
                        alt={eventData[i].title}
                      />
                    </figure>
                    <div className={styled.text_wrap}>
                      <h3 className={styled.tit}>{eventData[i].title}</h3>
                      <p className={styled.tit_desc}>{`이벤트 기간: ${eventData[
                        i
                      ].period.slice(0, 4)}년 ${eventData[i].period.slice(
                        4,
                        6
                      )}월 ${eventData[i].period.slice(6, 8)}일 ~ ${eventData[
                        i
                      ].period.slice(9, 13)}월 ${eventData[i].period.slice(
                        13,
                        15
                      )}월 ${eventData[i].period.slice(15, 17)}일`}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Event;
