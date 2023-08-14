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
        <div>
          <figure
            style={{
              display: "inline-block",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <img src={findProduct.thumbnail} alt="" />
          </figure>
          <List>
            <li>
              <Question>
                Q. 책 읽고 어떤 내용이었나요? 또는 줄거리를 작성하세요.
              </Question>
              <form>
                <TextArea></TextArea>
              </form>
            </li>
            <li>
              <Question>Q. 가장 기억에 남았던 내용이 있나요?</Question>
              <Form>
                <TextArea></TextArea>
              </Form>
            </li>
            <li>
              <Question>Q. 읽고 난 후 어떤 생각을 가지게 되었나요?</Question>
              <form>
                <TextArea></TextArea>
              </form>
            </li>
          </List>
        </div>
      )}
    </>
  );
}

export default BookReportPage;

const List = styled.ul`
  margin: 120px 0 0 0;

  li {
    margin: 0 0 80px 0;
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
