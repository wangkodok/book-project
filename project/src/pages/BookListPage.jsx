import Inner from "StyledCommon";
import SubPageVisual from "components/SubPageVisual";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function BookReportPage() {
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
      {bookReportList.length === 0 ? null : (
        <>
          {SubPageVisual("독후감 작성하기", "인쇄도 할 수 있어요!")}

          <SectionBookList>
            <Inner padding="80px 0">
              <div className="book-wrap">
                <figure
                  style={{
                    display: "inline-block",
                    border: "1px solid black",
                    padding: "10px",
                  }}
                >
                  <img src={findProduct.thumbnail} alt="" />
                </figure>
                <div className="text">
                  <strong>{findProduct.title}</strong>
                  <p>{findProduct.contents}</p>
                </div>
              </div>
              <List>
                <li>
                  <Question>Q. 책 읽고 어떤 내용이었나요?</Question>
                  <Form>
                    <TextArea></TextArea>
                  </Form>
                </li>
                <li>
                  <Question>Q. 가장 기억에 남았던 글이 있나요?</Question>
                  <Form>
                    <TextArea></TextArea>
                  </Form>
                </li>
                <li>
                  <Question>
                    Q. 읽고 난 후 어떤 생각을 가지게 되었나요?
                  </Question>
                  <Form>
                    <TextArea></TextArea>
                  </Form>
                </li>
              </List>
              <ButtonWrap>
                <Button color="#fff" backgroundColor="#B8883B">
                  인쇄하기
                </Button>
              </ButtonWrap>
            </Inner>
          </SectionBookList>
        </>
      )}
    </>
  );
}

export default BookReportPage;

const ButtonWrap = styled.div`
  display: flex;
  margin: 80px 0 0 0;
`;

const Button = styled.button`
  padding: 10px 28px;
  color: ${(props) => {
    return props.color;
  }};
  background-color: ${(props) => {
    return props.backgroundColor;
  }};
`;

const SectionBookList = styled.section`
  .book-wrap {
    display: flex;
    align-items: center;

    figure {
      margin: 0 28px 0 0;
    }

    .text {
      strong {
        display: block;
        font-size: 20px;
        margin: 0 0 12px 0;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

const List = styled.ul`
  margin: 120px 0 0 0;

  li {
    margin: 0 0 80px 0;
  }
  li:last-child {
    margin: 0;
  }
`;

const Question = styled.p`
  font-size: 20px;
  margin: 0 0 20px 0;
`;

const Form = styled.form`
  font-size: 0;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 20px;
  border: 1px solid #000;
  box-sizing: border-box;
  outline: none;
  resize: none;
`;
