import { createSlice } from "@reduxjs/toolkit";

// 참과 거짓
const toggleBoolean = createSlice({
  name: "Toggle",
  initialState: false,
  reducers: {
    setToggleBoolean(state, action) {
      return action.payload;
    },
  },
});

export const { setToggleBoolean } = toggleBoolean.actions;

export default toggleBoolean;
