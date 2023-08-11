import { configureStore } from "@reduxjs/toolkit";

import toggleBoolean from "./states/ToggleBoolean";
import cartList from "./states/CartList";
import bookReportList from "./states/BookReportList";
import queryValue from "./states/QueryValue";
import bookDataList from "./states/BookDataList";
import NoSearchResults from "./states/NoSearchResults";

export default configureStore({
  reducer: {
    toggleBoolean: toggleBoolean.reducer,
    cartList: cartList.reducer,
    bookReportList: bookReportList.reducer,
    queryValue: queryValue.reducer,
    bookDataList: bookDataList.reducer,
    NoSearchResults: NoSearchResults.reducer,
  },
});
