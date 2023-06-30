// 스타일 컴포넌트
import styled from "styled-components";

// 이미지
import Md_Book_01 from "assets/md_book_01.jpg";
import Md_Book_02 from "assets/md_book_02.jpg";

// 컴포넌트
import Inner from "StyledCommon";
import Image from "components/ui/atoms/Image";
import SectionTitle from "components/ui/atoms/SectionTitle";

export default function BookMd() {
  return (
    <SectionBookMd>
      <Inner padding="80px 0">
        <SectionTitle innerText="MD가 책 추천"></SectionTitle>
        <ul className="list">
          <li className="item">
            <div className="text-wrap">
              <strong>골든 에디션</strong>
              <p>
                사람들에게
                <br /> 상처받지 않을 것
              </p>
            </div>
            <Image src={Md_Book_01} />
          </li>
          <li className="item">
            <div className="text-wrap">
              <strong>정말 추천</strong>
              <p>
                10만 부 기념 특별
                <br /> 리커버 에디션
              </p>
            </div>
            <Image src={Md_Book_02} />
          </li>
        </ul>
      </Inner>
    </SectionBookMd>
  );
}

const SectionBookMd = styled.section`
  .list {
    display: flex;
    justify-content: space-between;

    .item {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: calc(50% - 14px);
      padding: 48px;
      box-sizing: border-box;
      background-color: #fbe5d3;
    }
  }

  .text-wrap {
    strong {
      display: inline-block;
      padding: 6px 16px;
      margin: 0 0 17px 0;
      border: 1px solid #000;
    }

    p {
      font-size: 32px;
      font-weight: 700;
      line-height: 46px;
    }
  }

  figure {
    position: absolute;
    top: 100px;
    right: 48px;
    box-shadow: 8px 8px 32px rgba(0, 0, 0, 0.25);
  }
`;
