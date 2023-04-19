import styled from "../style/BookSearch.module.css";

function Sale() {
  return (
    <div className={styled.sale}>
      <button>구매하기</button>
      <button onClick={() => {}}>찜하기</button>
    </div>
  );
}

export default Sale;
