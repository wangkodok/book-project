import Array from "assets/array.png";
import { useState } from "react";
import styled from "styled-components";

// 버튼 체크 컴포넌트
export default function ButtonCheck() {
  const [checkClick, setCheckClick] = useState(false);

  return (
    <Button
      onClick={() => {
        if (checkClick) {
          setCheckClick(false);
        } else {
          setCheckClick(true);
        }
      }}
      className={checkClick ? "on-check" : ""}
    ></Button>
  );
}

const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  border: 1px solid #000;
  width: 20px;
  height: 20px;

  &.on-check {
    background-image: url(${Array});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 9px;
  }
`;
