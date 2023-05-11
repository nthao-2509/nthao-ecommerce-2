import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  birthDay: '',
  sex: '',
  token: null,
}

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addUser: (state: any, action: any) => {
      const newItem = action.payload
      // const exis
    },
  },
})
export const {} = authSlice.actions
export default authSlice.reducer
