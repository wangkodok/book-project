// 리덕스
import { useSelector } from "react-redux";

// 컴포넌트
import SubPageTitle from "components/common/SubPageTitle";
import ProductInfo from "pages/ProductInfo";
import ProductCount from "pages/ProductCount";
import ProductTotalPrice from "pages/ProductTotalPrice";

// CSS 모듈
import styled from "style/cart/ShoppingBasket.module.css";

function SalePage({ convertPrice }) {
  // 상품 찜목록
  const cartList = useSelector((state) => {
    return state.cartList;
  });

  return (
    <section>
      <div className={styled.inner}>
        {SubPageTitle("찜목록들", "찜목록을 확인해주세요.")}
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
                      {/* 상품 정보 */}
                      <ProductInfo cartList={cartList} i={i} />
                    </td>
                    <td>
                      {/* 수량 */}
                      <ProductCount cartList={cartList} i={i} />
                    </td>
                    <td>
                      {/* 금액 */}
                      <ProductTotalPrice
                        cartList={cartList}
                        i={i}
                        convertPrice={convertPrice}
                      />
                    </td>
                    <td>
                      {/* 배송비 */}
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
