const { createSlice } = require("@reduxjs/toolkit");

const noSearchResults = createSlice({
  name: "noSearchResults",
  initialState: "",
  reducers: {
    setNoSearchResults(state, action) {
      return action.payload;
    },
  },
});

export const { setNoSearchResults } = noSearchResults.actions;

export default noSearchResults;
