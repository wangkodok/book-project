import { createSlice } from "@reduxjs/toolkit";

// 찜목록
const cartList = createSlice({
  name: "cartList",
  initialState: [],
  reducers: {
    // 찜하기 클릭하면 찜목록에 추가하고 중복 상품 제거
    setCartListAdd(state, action) {
      const existingItem = state.find(
        (item) => item.isbn === action.payload.isbn
      );
      if (existingItem) {
        existingItem.itemCount = existingItem.itemCount + 1;
      } else {
        state.push({ ...action.payload, itemCount: 1 });
      }
    },
    // 수량 + 버튼
    setItemPlus(state, action) {
      state[action.payload].itemCount = state[action.payload].itemCount + 1;
    },
    // 수량 - 버튼
    setItemMinus(state, action) {
      state[action.payload].itemCount = state[action.payload].itemCount - 1;
    },
  },
});

export const { setCartListAdd, setItemPlus, setItemMinus } = cartList.actions;

export default cartList;
