import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../slices/orderReducer";
export const store = configureStore({
  reducer: {
    products: orderReducer,
  },
});
