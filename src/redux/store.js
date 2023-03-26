import { configureStore } from "@reduxjs/toolkit";

import products from "./products";
import cart from "./cart";
import wishlist from "./wishlist";
import setUser from './userSlice'

export default configureStore({
  reducer: {
    products,
    cartProds: cart,
    wishlistProds:wishlist,
    user: setUser
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});