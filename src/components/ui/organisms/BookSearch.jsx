import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { setQueryValue } from "store/states/QueryValue";
import ButtonClick from "components/ui/atoms/ButtonClick";
import Search from "assets/ico_search.png";

export default function BookSearch({ onClick }) {
  const store = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(setQueryValue(event.target.value));
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onClick();
    }
  };

  return (
    <StyledBookSearch className="bookSearch">
      <form className="form" id="form" name="search">
        <input type="text" style={{ display: "none" }} />
        <input
          form="form"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={store.queryValue}
          test="text"
          placeholder="책 제목을 입력하세요."
        />
        <ButtonClick onClick={onClick} type="button" />
      </form>
    </StyledBookSearch>
  );
}

const StyledBookSearch = styled.div`
  position: relative;
  bottom: 24px;
  max-width: 1200px;
  margin: 0 auto;

  .form {
    position: relative;
    width: 381px;
    margin: 0 auto;
  }

  input {
    width: 100%;
    height: 48px;
    border: 1px solid #000;
    border-radius: 24px;
    padding: 14px 48px 14px 14px;
    box-sizing: border-box;
    outline: none;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    background-image: url(${Search});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 20px;
    width: 48px;
    height: 48px;
    /* outline: none; */
  }
`;
