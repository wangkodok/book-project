import { Link } from "react-router-dom";
import styled from "styled-components";

import { ListBookSiteData } from "ListBookSiteData";
import SubPageVisual from "components/ui/atoms/SubPageVisual";
import Inner from "StyledCommon";

export default function BookStore() {
  return (
    <>
      <SubPageVisual
        title="도서 쇼핑몰 사이트"
        desc="다양한 사이트에서 만나보세요."
      />
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
