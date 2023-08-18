import { Outlet, Link, useParams } from "react-router-dom";
import styled from "styled-components";

import eventData from "eventData";
import SubPageTitle from "components/common/SubPageTitle";
import Inner from "StyledCommon";

export default function Event() {
  const { id } = useParams();
  const findProduct = eventData.find(function (obj) {
    return obj.id === Number(id);
  });

  return (
    <SectionEvent>
      <Inner>
        <SubPageTitle title={"이벤트"} desc={"재미있는 이벤트를 즐겨보세요."} />
      </Inner>
      <EventListWrap>
        <Outlet></Outlet> {/* 이벤트에서 해당하는 페이지 */}
        {findProduct !== undefined ? null : (
          <EventList>
            {eventData.map((value, i) => {
              return eventData[i].title === "not open" ? null : (
                <EventListItem key={i}>
                  <Link to={`/event/${eventData[i].id}`}>
                    <figure>
                      <FigureImg
                        src={eventData[i].thumbnail}
                        alt={eventData[i].title}
                      />
                    </figure>
                    <TextWrap>
                      <TextWrapH3>{eventData[i].title}</TextWrapH3>
                      <TextWrapDesc>{`이벤트 기간: ${eventData[i].period.slice(
                        0,
                        4
                      )}년 ${eventData[i].period.slice(4, 6)}월 ${eventData[
                        i
                      ].period.slice(6, 8)}일 ~ ${eventData[i].period.slice(
                        9,
                        13
                      )}월 ${eventData[i].period.slice(13, 15)}월 ${eventData[
                        i
                      ].period.slice(15, 17)}일`}</TextWrapDesc>
                    </TextWrap>
                  </Link>
                </EventListItem>
              );
            })}
          </EventList>
        )}
      </EventListWrap>
    </SectionEvent>
  );
}

const SectionEvent = styled.section`
  border-top: 1px solid #eee;
`;

const EventListWrap = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 40px;
`;

const EventList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const EventListItem = styled.li`
  width: calc((100% / 3) - 20px);
  margin: 10px 10px 60px 10px;
`;

const FigureImg = styled.img`
  width: 100%;
`;

const TextWrap = styled.div`
  margin: 20px 0 0 0;
`;

const TextWrapH3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

const TextWrapDesc = styled.p`
  font-size: 14px;
`;
