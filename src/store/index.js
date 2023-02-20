import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../pages/cartSlice"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})