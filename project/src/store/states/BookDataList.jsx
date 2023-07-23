const { createSlice } = require("@reduxjs/toolkit");

const bookDataList = createSlice({
  name: "bookDataList",
  initialState: [],
  reducers: {
    setBookDataList(state, action) {
      return (state = action.payload);
    },
    setBookDataReset(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setBookDataList, setBookDataReset } = bookDataList.actions;

export default bookDataList;
