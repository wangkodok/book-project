import { useDispatch, useSelector } from "react-redux";
import styled from "../style/SalePage.module.css";
import { setPrice, setBox, setBookVolume } from "../store/State";
import { useEffect, useState } from "react";

function SalePage({ bookData }) {
  let cartList = useSelector((state) => {
    return state.cartList;
  });
  console.log(cartList);

  // 찜목록 수량
  let dispatch = useDispatch();

  let [add, setAdd] = useState([]);
  let [가격, 고정가격] = useState([]);
  let [sale, setSale] = useState([]);

  useEffect(() => {
    for (let index = 0; index < cartList.length; index++) {
      add.push(1);
      sale.push(cartList[index].sale_price);
      가격.push(cartList[index].sale_price);
    }
  }, []);

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

                    {typeof sale[i] === "undefined" ? (
                      <span>가격: {cartList[i].sale_price}</span>
                    ) : (
                      <span>{`가격: ${sale[i]}`}</span>
                      // <span>{`가격: ${cartList[i].sale_price}`}</span>
                    )}

                    {typeof cartList[i].bookCount === "undefined" ? (
                      <span>수량: 1</span>
                    ) : (
                      <span>{`수량: ${cartList[i].bookCount}`}</span>
                    )}

                    {typeof cartList[i].bookCount === "undefined" ? (
                      <p>수량: 1</p>
                    ) : (
                      <p>{`책 수량 ${cartList[i].bookCount}`}</p>
                    )}

                    {/* // 찜목록 수량 */}
                    <button
                      // - 버튼
                      onClick={() => {
                        let copy = [...add];
                        if (copy[i] === 1) {
                          // 현재 수량이 "1" 개이면 함수 종료
                          return;
                        }
                        copy[i] = copy[i] - 1;
                        setAdd(copy);

                        let price = [...sale];
                        price[i] = price[i] - 가격[i];
                        setSale(price);
                        console.log(price);
                      }}
                    >
                      -
                    </button>
                    <button
                      // + 버튼
                      onClick={() => {
                        let copy = [...add];
                        copy[i] = copy[i] + 1;
                        setAdd(copy);

                        // dispatch(setBookVolume(cartList[i].title));
                        dispatch(setBookVolume(copy));
                        console.log(copy);

                        let price = [...sale];
                        price[i] = price[i] + 가격[i];
                        setSale(price);
                        console.log(price);

                        dispatch(setBox(price));
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
