// 리덕스
import { useDispatch } from "react-redux";

// 상태 관리
import { setItemPlus, setItemMinus } from "store/State";

import styled from "style/cart/ShoppingBasket.module.css";

function ProductCount({ cartList, i }) {
  const dispatch = useDispatch();

  return (
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
  );
}

export default ProductCount;
