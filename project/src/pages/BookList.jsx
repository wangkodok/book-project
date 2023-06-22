import Inner from "StyledCommon";
import SubPageVisual from "components/SubPageVisual";
import { useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

export default function BookList() {
  const bookReportList = useSelector((state) => {
    const set = new Set(state.bookReportList);
    const uniqueArr = [...set];
    return uniqueArr;
  });

  console.log(bookReportList);

  const { id } = useParams();
  const findProduct = bookReportList.find(function (obj) {
    return obj.isbn === id;
  });
  console.log(findProduct);
  return (
    <>
      {/* 제어 페이지 전체로 제어 걸고 해주기 */}

      {findProduct !== undefined ? (
        <Outlet></Outlet>
      ) : (
        <>
          {SubPageVisual("내가 읽었던 책들", "최소 1년에 12권 읽어요.")}
          <div>
            <Inner padding="80px 0">
              <BookLists>
                <ul className="list">
                  {bookReportList.map((value, i) => {
                    return (
                      <li key={i} className="item">
                        <div className="content">
                          <figure className="img-box">
                            <img
                              src={bookReportList[i].thumbnail}
                              alt={bookReportList[i].title}
                            />
                          </figure>
                          <div className="item-bg"></div>
                          <Link
                            to={`${bookReportList[i].isbn}`}
                            className="book-write"
                          >
                            독후감 작성하기
                          </Link>
                        </div>
                        <div className="text-area">
                          <strong className="title">
                            {bookReportList[i].title}
                          </strong>
                          <p className="title-desc">
                            {bookReportList[i].contents}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </BookLists>
            </Inner>
          </div>
        </>
      )}
    </>
  );
}

const BookLists = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    width: calc(100% / 4 - 21px);
    margin: 0px 28px 80px 0px;
  }
  .item:hover .book-write {
    display: block;
  }
  .item:nth-child(4n) {
    margin: 0;
  }
  .content {
    position: relative;
    padding: 66px 0 0 0;
  }
  .img-box {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border: 1px solid #eee;
  }
  .book-write {
    display: none;
    position: absolute;
    left: 50%;
    bottom: 32px;
    transform: translate(-50%, 0);
    background-color: #fff;
    padding: 10px 22px;
    border: 1px solid #000;
    font-size: 14px;
  }
  .text-area {
    margin: 24px 0 0 0;
  }
  .title {
    display: block;
    width: 212px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title-desc {
    width: 224px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .item-bg {
    background-color: #eee;
    height: 192px;
  }
`;
