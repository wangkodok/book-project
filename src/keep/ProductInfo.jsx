// CSS 모듈
import styled from "style/cart/ShoppingBasket.module.css";

function ProductInfo({ cartList, i }) {
  return (
    <div className={`${styled["product-common"]} ${styled["product-info"]}`}>
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
  );
}

export default ProductInfo;
