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

// 찜목록 수량
let count = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    setCountPlus(state, action) {
      return (state = state + action.payload);
    },
    setCountMinus(state, action) {
      return (state = state - action.payload);
    },
  },
});

export let { setCountPlus, setCountMinus } = count.actions;

// 찜목록
let cartList = createSlice({
  name: "cartList",
  initialState: [],
  reducers: {
    setCartListAdd(state, action) {
      state.push(action.payload);
    },
    // 수량 체크 후 가격
    setBox(state, action) {
      let copy = [...state];
      for (let index = 0; index < state.length; index++) {
        console.log(state[index].sale_price);
        console.log(copy[index].sale_price);
        console.log(action.payload);

        state[index].sale_price = action.payload[index];
      }
    },

    setBookVolume(state, action) {
      let copy = [...state];
      for (let index = 0; index < state.length; index++) {
        copy[index].bookCount = action.payload[index];

        state[index].sale_price =
          copy[index].sale_price * action.payload[index];
      }
    },
  },
});

export let { setCartListAdd, setPrice, setBox, setBookVolume } =
  cartList.actions;

export default configureStore({
  reducer: {
    is: is.reducer,
    count: count.reducer,
    cartList: cartList.reducer,
  },
});
