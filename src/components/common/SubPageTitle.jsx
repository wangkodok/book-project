import styled from "style/cart/ShoppingBasket.module.css";

export default function SubPageTitle(title, desc) {
  return (
    <div className={styled.title_wrap}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
