import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { message } from 'antd'
import _ from 'lodash'
import cartService from './cartService'
import { isAwaitExpression } from 'typescript'

const cartItems = localStorage.getItem('cartItem')

const initialState = {
  cartItems: cartItems ? JSON.parse(cartItems) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
}

export const selectCart = createAsyncThunk('cart/', async (idUser: string) => {
  try {
    return cartService.selectDataCartByUser(idUser)
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return message
  }
})
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    selectCartFromDB: (state: any, actions: any) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
    addToCart: (state: any, action: any) => {
      const itemIndex = state.cartItems.findIndex((item: any) => item.idProduct === action.payload.idProduct)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
      }
      cartService.addToCart(state.cartItems)
      message.success('Thêm sản phẩm hành thành công')
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
    },
    updateQuantity: (state: any, action: any) => {
      const itemIndex = state.cartItems.findIndex((item: any) => item.idProduct === action.payload.idProduct)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity -= 1
      }
      message.success('Giảm số lượng sản phẩm hành thành công')
      cartService.addToCart(state.cartItems)
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
    },
    removeCartItem: (state: any, action: any) => {
      const removeItem = state.cartItems.filter((e: any) => e.idProduct !== action.payload.idProduct)
      state.cartItems = removeItem
      cartService.addToCart(state.cartItems)
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
      message.success('Xóa sản phẩm hành thành công')
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(selectCart.pending, (state: any) => {
        state.isLoading = true
      })
      .addCase(selectCart.fulfilled, (state: any, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.cartItems = action.payload
      })
      .addCase(selectCart.rejected, (state: any, action: any) => {
        state.isLoading = false
        state.isError = true
        state.user = []
      })
  },
})
export const { addToCart, updateQuantity, removeCartItem, selectCartFromDB } = cartSlice.actions
export default cartSlice.reducer
