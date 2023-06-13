import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from 'features/auth/authService'
import productService from './productService'

const initialState = {
  product: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getAllProduct = createAsyncThunk('product/all', async () => {
  try {
    return await productService.getAllProduct()
  } catch (error: any) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return message
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    allProduct: (state: any, action: any) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllProduct.fulfilled, (state: any, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.product = action.payload
      })
      .addCase(getAllProduct.rejected, (state: any, action: any) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  },
})
export const { allProduct } = productSlice.actions
export default productSlice.reducer
