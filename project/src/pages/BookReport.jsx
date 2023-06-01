import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Inner from "StyledCommon";

function BookReport() {
  const bookReportList = useSelector((state) => {
    const set = new Set(state.bookReportList);
    const uniqueArr = [...set];
    return uniqueArr;
  });

  console.log(bookReportList);

  return (
    <>
      <SubPageBg>
        <Inner padding="80px 0;">
          <SubPageTitle>이제, 온라인에서 독후감을 작성해보세요.</SubPageTitle>
        </Inner>
      </SubPageBg>
      <SectionBookReport>
        <Inner padding="80px 0">
          <ContentTitle>내가 읽었던 책 목록</ContentTitle>
          <ListWrapper>
            <List>
              {bookReportList.map((value, i) => {
                return (
                  <Item key={i}>
                    <ImgWrap>
                      <Img src={bookReportList[i].thumbnail} alt="" />
                    </ImgWrap>
                    <LinkButtonWrap>
                      <div>
                        <LinkButton to="/">독후감 작성하기</LinkButton>
                      </div>
                    </LinkButtonWrap>
                  </Item>
                );
              })}
            </List>
          </ListWrapper>
        </Inner>
      </SectionBookReport>
    </>
  );
}

export default BookReport;

const SubPageBg = styled.div`
  background-color: #efefef;
`;

const SubPageTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const SectionBookReport = styled.div``;

const ContentTitle = styled.h2`
  margin: 0 0 40px 0;
  font-size: 24px;
`;

const ListWrapper = styled.div``;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  position: relative;
  width: 25%;
  height: 297px;
  margin: 0 28px 0 0;
  overflow: hidden;

  &:hover div {
    display: block;
  }
`;

const ImgWrap = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  background-color: #f4f4f4;
`;

const Img = styled.img``;

const LinkButtonWrap = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  > div {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const LinkButton = styled(Link)`
  display: inline-block;
  color: #000;
  background-color: #fff;
  padding: 10px;
`;
