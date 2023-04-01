import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "state이름",
  initialState: "값",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 10, 10],
});

let is = createSlice({
  name: "is",
  initialState: false,
  reducers: {
    isChange(state) {
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

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    is: is.reducer,
    count: count.reducer,
  },
});
