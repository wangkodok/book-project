import { createSlice } from "@reduxjs/toolkit";

const toggleBoolean = createSlice({
  name: "Toggle",
  initialState: false,
  reducers: {
    setToggleBoolean(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setToggleBoolean } = toggleBoolean.actions;

export default toggleBoolean;
