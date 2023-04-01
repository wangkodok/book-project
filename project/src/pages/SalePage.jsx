import { useDispatch, useSelector } from "react-redux";
import styled from "../style/SalePage.module.css";
import { setCountPlus, setCountMinus } from "../store/State";

function SalePage({ bookData }) {
  console.log(bookData);

  let i = useSelector((state) => {
    return state;
  });
  console.log(i);

  let count = useSelector((state) => {
    return state.count;
  });
  console.log(count);

  // 찜목록 수량
  let dispatch = useDispatch();

  return (
    <section>
      <div className={styled.inner}>
        {
          <div className={styled.title_wrap}>
            <h2>찜목록들</h2>
            <p>찜목록을 확인해주세요.</p>
          </div>
        }
      </div>
      <div className={styled.content}>
        <ul className={styled.list}>
          <li className={styled.item}>
            <div className={styled.contentList}>
              <figure>
                <img src="https://via.placeholder.com/82x120.jpg" alt="" />
              </figure>
              <div className={styled.saleItem}>
                <span>제목</span>
                <span>가격</span>
                <span>{`수량: ${count}`}</span>
                {/* // 찜목록 수량 */}
                <button
                  // - 버튼
                  onClick={() => {
                    // 현재 수량이 "0" 개이면 함수 종료
                    if (count === 0) {
                      return;
                    }
                    dispatch(setCountMinus(1));
                  }}
                >
                  -
                </button>
                <button
                  // + 버튼
                  onClick={() => {
                    dispatch(setCountPlus(1));
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </li>
          <li className={styled.item}>
            <div className={styled.contentList}>
              <figure>
                <img src="https://via.placeholder.com/82x120.jpg" alt="" />
              </figure>
              <div className={styled.saleItem}>
                <span>제목</span>
                <span>가격</span>
                <span>수량</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SalePage;
