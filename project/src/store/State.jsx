import { configureStore } from "@reduxjs/toolkit";

import toggleBoolean from "./states/ToggleBoolean";
import cartList from "./states/CartList";
import bookReportList from "./states/BookReportList";

export default configureStore({
  reducer: {
    toggleBoolean: toggleBoolean.reducer,
    cartList: cartList.reducer,
    bookReportList: bookReportList.reducer,
  },
});
