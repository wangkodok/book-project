// 리덕스
import { useDispatch, useSelector } from "react-redux";

// 상태 관리
import { setItemPlus, setItemMinus } from "store/State";

// CSS 모듈
import styled from "style/cart/ShoppingBasket.module.css";

function SalePage({ convertPrice }) {
  // 상품 찜목록
  const cartList = useSelector((state) => {
    return state.cartList;
  });
  console.log(cartList);

  const setQuantity = [...new Map(cartList.map((m) => [m.title, m])).values()];
  console.log(setQuantity);

  const dispatch = useDispatch();

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
          {cartList.map((value, i) => {
            return (
              <li key={i} className={styled.item}>
                <div className={styled.contentList}>
                  <figure>
                    <img src={`${cartList[i].thumbnail}`} alt="" />
                  </figure>
                  <div className={styled.saleItem}>
                    {typeof cartList[i] === "undefined" ? (
                      "제목"
                    ) : (
                      <span>{`제목: ${cartList[i].title}`}</span>
                    )}
                    <span>{`가격: ${convertPrice(
                      cartList[i].sale_price * cartList[i].itemCount
                    )}`}</span>
                    <span>{`수량: ${cartList[i].itemCount}`}</span>
                    <button
                      // - 버튼
                      onClick={() => {
                        if (cartList[i].itemCount === 1) {
                          return;
                        }
                        dispatch(setItemMinus(i));
                      }}
                    >
                      -
                    </button>
                    <button
                      // + 버튼
                      onClick={() => {
                        dispatch(setItemPlus(i));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SalePage;
