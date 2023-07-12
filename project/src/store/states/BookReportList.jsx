import { createSlice } from "@reduxjs/toolkit";

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

export default bookReportList;
