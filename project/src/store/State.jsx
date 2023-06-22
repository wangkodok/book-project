import { configureStore, createSlice } from "@reduxjs/toolkit";

// 참과 거짓
const isBoolean = createSlice({
  name: "isBoolean",
  initialState: false,
  reducers: {
    setIsBoolean() {
      return true;
    },
  },
});

export const { setIsBoolean } = isBoolean.actions;

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

const bookReportList = createSlice({
  name: "bookReportList",
  initialState: [],
  reducers: {
    setBookReportListAdd(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setBookReportListAdd } = bookReportList.actions;

// 버튼 참과 거짓
const isBtnBoolean = createSlice({
  name: "isBoolean",
  initialState: false,
  reducers: {
    setIsBtnBoolean() {
      return true;
    },
  },
});

export const { setIsBtnBoolean } = isBtnBoolean.actions;

export default configureStore({
  reducer: {
    isBoolean: isBoolean.reducer,
    cartList: cartList.reducer,
    bookReportList: bookReportList.reducer,
    isBtnBoolean: isBtnBoolean.reducer,
  },
});
