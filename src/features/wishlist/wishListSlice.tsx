import { createSlice } from '@reduxjs/toolkit'
import { message } from 'antd'

const wishListItems = localStorage.getItem('wishList')
const initialState = {
  wishListItem: wishListItems ? JSON.parse(wishListItems) : [],
}
const wishListItemSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state: any, action: any) => {
      const itemIndex = state.wishListItem?.findIndex((item: any) => item.idProduct === action.payload.idProduct)
      if (itemIndex >= 0) {
        message.error('Sản phẩm đã có trong danh sách yêu thích')
      } else {
        message.success('Thêm sản phẩm yêu thích thành công')
        state.wishListItem.push(action.payload)
        localStorage.setItem('wishList', JSON.stringify(state.wishListItem))
      }
    },
    removeWishList: (state: any, action: any) => {
      const removeItem = state.wishListItem.filter((e: any) => e.idProduct !== action.payload.idProduct)
      state.wishListItem = removeItem
      localStorage.setItem('wishList', JSON.stringify(state.wishListItem))
      message.success('Xóa sản phẩm hành thành công')
    },
  },
})

export const { addToWishList, removeWishList } = wishListItemSlice.actions
export default wishListItemSlice.reducer
