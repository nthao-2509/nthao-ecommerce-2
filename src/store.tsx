import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'features/auth/authSlice'
import cartSlice from 'features/cart/cartSlice'
import productSlice from 'features/getProduct/productSlice'
import wishListItemSlice from 'features/wishlist/wishListSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice,
    cart: cartSlice,
    wishList: wishListItemSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
