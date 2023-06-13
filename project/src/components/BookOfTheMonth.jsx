import Inner from "StyledCommon";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BookMoth from "assets/book_moth.jpg";
import BookRating from "components/BookRating";

export default function BookOfTheMonth() {
  return (
    <SectionBookOfTheMonth>
      <Inner padding="80px 0">
        <MainContentTitle>이달의 책</MainContentTitle>
        <BookOfTheMonthInfo>
          <div className="common-month month">
            <div className="info-wrap">
              <figure className="moth-book">
                <img src={BookMoth} alt="" />
              </figure>
              <div className="book-info">
                <h4 className="tit-h4">자바스크립트 핵심 가이드</h4>
                <BookRating />
                <p className="desc">
                  야후의 선임 자바스크립트 아키텍트 더글라스 크락포드의
                  『자바스크립트 핵심 가이드』. 자바스크립트를 우연히...
                </p>
              </div>
            </div>
          </div>

          {/* 오른쪽 */}
          <ol className="common-month">
            <li className="item on">
              <ItemLink to="/">
                <strong className="order">1</strong>
                <p className="order-desc">자바스크립트 핵심 가이드(더글...</p>
              </ItemLink>
            </li>
            <li className="item">
              <ItemLink to="/">
                <strong className="order">2</strong>
                <p className="order-desc">자바스크립트 핵심 가이드(더글...</p>
              </ItemLink>
            </li>
            <li className="item">
              <ItemLink to="/">
                <strong className="order">3</strong>
                <p className="order-desc">자바스크립트 핵심 가이드(더글...</p>
              </ItemLink>
            </li>
          </ol>
        </BookOfTheMonthInfo>
      </Inner>
    </SectionBookOfTheMonth>
  );
}

const MainContentTitle = styled.h3`
  line-height: 41px;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 40px 0;
`;

const ItemLink = styled(Link)`
  padding: 45px 0;
  font-size: 20px;
`;

const SectionBookOfTheMonth = styled.section`
  .common-month {
    width: calc(50% - 14px);
  }
  .month {
    padding: 32px;
    box-sizing: border-box;
    background-color: #eee;
  }

  .info-wrap {
    display: flex;
    justify-content: space-between;
  }

  .tit-h4 {
    margin: 0 0 16px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
  }

  .desc {
    width: 377px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    letter-spacing: -1.5px;
  }
`;

const BookOfTheMonthInfo = styled.div`
  display: flex;
  justify-content: space-between;

  .item {
    position: relative;

    ::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: #dbdbdb;
    }

    .order {
      position: absolute;
      top: 50%;
      left: 32px;
      transform: translate(0, -50%);
      font-size: 48px;
      font-weight: 900;
      font-family: "Sriracha", cursive;
      line-height: 1;
      color: #dbdbdb;
    }

    .order-desc {
      text-align: center;
      /* display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 20px;
      color: #dbdbdb; */
    }
  }

  .item.on {
    position: relative;

    ::before {
      background-color: #000;
    }

    .order {
      color: #000;
    }

    .order-desc {
      color: #000;
    }
  }
`;
