import { configureStore, createSlice } from "@reduxjs/toolkit";

let is = createSlice({
  name: "is",
  initialState: false,
  reducers: {
    isChange() {
      return true;
    },
  },
});

export let { isChange } = is.actions;

// 찜목록
let cartList = createSlice({
  name: "cartList",
  initialState: [],
  reducers: {
    setCartListAdd(state, action) {
      state.push(action.payload);
    },
    // 수량 체크 후 가격
    setItemPlus(state, action) {
      state[action.payload].itemCount = state[action.payload].itemCount + 1;
    },
    setItemMinus(state, action) {
      state[action.payload].itemCount = state[action.payload].itemCount - 1;
    },
  },
});

export let { setCartListAdd, setItemPlus, setItemMinus } = cartList.actions;

export default configureStore({
  reducer: {
    is: is.reducer,
    cartList: cartList.reducer,
  },
});
