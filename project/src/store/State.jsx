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
  initialState: [],
  reducers: {
    setCountPlus(state, action) {
      console.log(state.title);
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
    수량(state, action) {
      state.push(action.payload);
    },
    // 수량 체크 후 가격
    setItemPlus(state, action) {
      // let 번호 = state.findIndex((a) => {
      //   return a.title === action.payload;
      // });
      // state[번호].itemCount++;

      // for (let index = 0; index < state.length; index++) {
      //   if (state[index].title === action.payload) {
      //     console.log(state[index].itemCount++);
      //   }
      // }
      console.log(state[action.payload].title);
      console.log(action.payload);

      state[action.payload].itemCount = state[action.payload].itemCount + 1;
    },
    setItemMinus(state, action) {
      state[action.payload].itemCount = state[action.payload].itemCount - 1;
    },
  },
});

export let { setCartListAdd, 수량, setItemPlus, setItemMinus, setBookVolume } =
  cartList.actions;

export default configureStore({
  reducer: {
    is: is.reducer,
    count: count.reducer,
    cartList: cartList.reducer,
  },
});
