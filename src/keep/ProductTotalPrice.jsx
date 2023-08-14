// CSS 모듈
import styled from "style/cart/ShoppingBasket.module.css";

function ProductTotalPrice({ cartList, i, convertPrice }) {
  return (
    <div className={styled["product-common"]}>
      <span>{`가격: ${convertPrice(
        cartList[i].sale_price * cartList[i].itemCount
      )}원`}</span>
    </div>
  );
}

export default ProductTotalPrice;
