import styled from "styled-components";

export default function Image({ src, alt }) {
  return (
    <Figure>
      <Img src={src} alt={alt} />
    </Figure>
  );
}

const Figure = styled.figure``;
const Img = styled.img``;
