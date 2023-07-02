import styled from "styled-components";

// onClick 버튼 컴포넌트
export default function ButtonClick({
  innerText,
  onClick,
  padding,
  margin,
  color,
  backgroundColor,
  backgroundImage,
  backgroundRepeat,
  backgroundSize,
  backgroundPosition,
  border,
  boxShadow,
}) {
  return (
    <Button
      onClick={onClick}
      padding={padding}
      margin={margin}
      color={color}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundRepeat={backgroundRepeat}
      backgroundSize={backgroundSize}
      backgroundPosition={backgroundPosition}
      border={border}
      boxShadow={boxShadow}
    >
      {innerText}
    </Button>
  );
}

const Button = styled.button`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => props.backgroundImage};
  background-repeat: ${(props) => props.backgroundRepeat};
  background-size: ${(props) => props.backgroundSize};
  background-position: ${(props) => props.backgroundPosition};
  border: ${(props) => props.border};
  box-shadow: ${(props) => props.boxShadow};
`;

// 스타일 컴포넌트 값 전달하는 코드
// ${(props) => {
//   return props.color;
// }};
