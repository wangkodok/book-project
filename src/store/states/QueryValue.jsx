import { createSlice } from "@reduxjs/toolkit";

const queryValue = createSlice({
  name: "queryValue",
  initialState: "",
  reducers: {
    setQueryValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setQueryValue } = queryValue.actions;

export default queryValue;
