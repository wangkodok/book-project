import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Inner from "StyledCommon";
import SectionTitle from "components/ui/atoms/SectionTitle";
import { ListItem00, ListItem01, ListItem02 } from "./ListItem00";

export default function BookOfTheMonth() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionBookOfTheMonth>
      <Inner padding="80px 0">
        <SectionTitle innerText="이달의 책"></SectionTitle>
        <BookOfTheMonthInfo>
          <TabContent activeTab={activeTab} />
          <ol className="common-month">
            <li className={`item ${activeTab === 0 ? "on" : ""}`}>
              <ItemLink
                to="/"
                onClick={() => {
                  setActiveTab(0);
                }}
              >
                <strong className="order">1</strong>
                <p className="order-desc">자바스크립트 핵심 가이드(더글...</p>
              </ItemLink>
            </li>
            <li className={`item ${activeTab === 1 ? "on" : ""}`}>
              <ItemLink
                to="/"
                onClick={() => {
                  setActiveTab(1);
                }}
              >
                <strong className="order">2</strong>
                <p className="order-desc">더 괜찮은 웹 개발자가 되기 위한...</p>
              </ItemLink>
            </li>
            <li className={`item ${activeTab === 2 ? "on" : ""}`}>
              <ItemLink
                to="/"
                onClick={() => {
                  setActiveTab(2);
                }}
              >
                <strong className="order">3</strong>
                <p className="order-desc">모던 자바스크립트 Deep Dive</p>
              </ItemLink>
            </li>
          </ol>
        </BookOfTheMonthInfo>
      </Inner>
    </SectionBookOfTheMonth>
  );
}

function TabContent({ activeTab }) {
  return [<ListItem00 />, <ListItem01 />, <ListItem02 />][activeTab];
}

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
