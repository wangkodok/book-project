import { useDispatch, useSelector } from "react-redux";
import styled from "../style/SalePage.module.css";
import {
  setPrice,
  setCountPlus,
  setItemPlus,
  setItemMinus,
} from "../store/State";
import { useState, useEffect } from "react";

function SalePage({ bookData }) {
  // 상품 찜목록
  let cartList = useSelector((state) => {
    return state.cartList;
  });
  console.log(cartList);
  // const map = new Map(); // 맵
  // for (const character of cartList) {
  //   map.set(JSON.stringify(character), character); // name, company가 모두 같은 객체 요소는 제외한 맵 생성
  // }
  // const arrUnique = [...map.values()];
  // console.log(arrUnique); // 중복 제거 결과

  // 수량 체크
  let count = useSelector((state) => {
    return state.count;
  });
  console.log(count);

  let [add, setAdd] = useState([]);
  useEffect(() => {
    // for (let index = 0; index < cartList.length; index++) {
    //   add.push(1);
    // }
  }, []);
  console.log(add);

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
                    {/* <span>{`가격: ${cartList[i].sale_price}`}</span> */}
                    <span>{`가격: ${
                      cartList[i].sale_price * cartList[i].itemCount
                    }`}</span>
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
                        // let copy = [...add];
                        // copy[i] = copy[i] + 1;
                        // setAdd(copy);
                        // dispatch(setCountPlus(copy));

                        dispatch(setItemPlus(i));
                        // dispatch(setItemPlus(cartList[i].title));
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
