import styled from "../style/Event.module.css";
import { Outlet, Link, useParams } from "react-router-dom";
import eventData from "../eventData";
import { useEffect, useState } from "react";

function Event() {
  const [data, setData] = useState(eventData);

  let { id } = useParams();
  let 찾은상품 = data.find(function (x) {
    return x.id === Number(id);
  });
  console.log(찾은상품);

  useEffect(() => {}, [data]);

  return (
    <section className={styled.event}>
      <div className={styled.inner}>
        {
          <div className={styled.title_wrap}>
            <h2>이벤트</h2>
            <p>재미있는 이벤트를 즐겨보세요.</p>
          </div>
        }
      </div>
      <div className={styled.event_list_wrap}>
        <Outlet></Outlet> {/* 이벤트에서 해당하는 페이지 */}
        {찾은상품 !== undefined ? null : (
          <ul className={styled.event_list}>
            {data.map((value, i) => {
              return data[i].title === "not open" ? null : (
                <li key={i} className={styled.item}>
                  <Link to={`/event/${data[i].id}`}>
                    <figure className={styled.figure}>
                      <img src={data[i].thumbnail} alt={data[i].title} />
                    </figure>
                    <div className={styled.text_wrap}>
                      <h3 className={styled.tit}>{data[i].title}</h3>
                      <p className={styled.tit_desc}>{`이벤트 기간: ${data[
                        i
                      ].period.slice(0, 4)}년 ${data[i].period.slice(
                        4,
                        6
                      )}월 ${data[i].period.slice(6, 8)}일 ~ ${data[
                        i
                      ].period.slice(9, 13)}월 ${data[i].period.slice(
                        13,
                        15
                      )}월 ${data[i].period.slice(15, 17)}일`}</p>
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
