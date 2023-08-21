import styled from "styled-components";

import Star from "assets/star.png";

export default function BookRating() {
  return (
    <Rating className="approximately">
      <div className="star-list">
        <span className="star-item"></span>
        <span className="star-item"></span>
        <span className="star-item"></span>
        <span className="star-item half"></span>
        <span className="star-item empty"></span>
      </div>
      <strong className="star-score">3.5점</strong>
    </Rating>
  );
}

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 32px 0;

  .star-list {
    display: flex;
    font-size: 32px;
    color: #fed70c;

    .star-item {
      display: block;
      width: 32px;
      height: 32px;
      background-image: url(${Star});
      background-repeat: no-repeat;
      background-size: auto 32px;
      background-position: 0 0;
    }

    .star-item.half {
      background-position: -96px 0px;
    }

    .star-item.empty {
      background-position: -128px 0px;
    }
  }

  .star-score {
    margin: 0 0 0 12px;
  }
`;
