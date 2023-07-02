import { ListBookSiteData } from "ListBookSiteData";
import Inner from "StyledCommon";
import SubPageVisual from "components/ui/organisms/SubPageVisual";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ListBookSites() {
  return (
    <>
      {SubPageVisual(
        "도서 구매 사이트 목록",
        "아래의 목록에서 도서를 구매하세요."
      )}
      <SectionListBookSite>
        <Inner padding="80px 0">
          <div className="list-book-wrap">
            <ul className="list">
              {ListBookSiteData.map((value, i) => {
                return (
                  <li key={i} className="item">
                    <Link
                      to={ListBookSiteData[i].site}
                      target="_blank"
                      className="link"
                    >
                      <figure>
                        <img
                          src={ListBookSiteData[i].logo}
                          alt={ListBookSiteData[i].title}
                        />
                      </figure>
                      <strong className="book-title">
                        {ListBookSiteData[i].title}
                      </strong>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Inner>
      </SectionListBookSite>
    </>
  );
}

const SectionListBookSite = styled.section`
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    width: calc(100% / 4 - 21px);
    margin: 0 28px 80px 0;
  }

  .item:nth-child(4n) {
    margin: 0;
  }

  .link img {
    transform: scale(1);
    transition: all 0.3s ease;
  }

  .link:hover img {
    transform: scale(1.2);
  }

  figure {
    margin: 0 0 20px 0;
    background-color: #eee;
    text-align: center;
    padding: 40px 0;
  }

  strong {
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }
`;
