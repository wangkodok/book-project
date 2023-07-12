import { createSlice } from "@reduxjs/toolkit";

// 참과 거짓
const toggleBoolean = createSlice({
  name: "Toggle",
  initialState: false,
  reducers: {
    setToggle() {
      return true;
    },
  },
});

export const { setToggleBoolean } = toggleBoolean.actions;

export default toggleBoolean;
