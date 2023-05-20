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
        <div className={styled.list}>
          <table>
            {cartList.length === 0 ? null : (
              <thead>
                <tr>
                  <th style={{ width: "50%", padding: "10px 0" }}>상품 정보</th>
                  <th style={{ width: "20%", padding: "10px 0" }}>수량</th>
                  <th style={{ width: "20%", padding: "10px 0" }}>금액</th>
                  <th style={{ width: "10%", padding: "10px 0" }}>배송비</th>
                </tr>
              </thead>
            )}
            {cartList.map((value, i) => {
              return (
                <tbody key={i} className={styled.item}>
                  <tr>
                    <td>
                      <div
                        className={`${styled["product-common"]} ${styled["product-info"]}`}
                      >
                        <figure>
                          <img src={`${cartList[i].thumbnail}`} alt="" />
                        </figure>
                        <div className={styled["product-title"]}>
                          {typeof cartList[i] === "undefined" ? (
                            "제목"
                          ) : (
                            <span>{`${cartList[i].title}`}</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styled["product-common"]}>
                        <div>
                          <span>{`수량: ${cartList[i].itemCount}`}</span>
                        </div>
                        <div className={styled["count-btn"]}>
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
                    </td>
                    <td>
                      <div className={styled["product-common"]}>
                        <span>{`가격: ${convertPrice(
                          cartList[i].sale_price * cartList[i].itemCount
                        )}원`}</span>
                      </div>
                    </td>
                    <td>
                      <div className={styled["product-common"]}>무료 배송</div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
}

export default SalePage;
