import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading : false,
  data : {},
  error : null
}


export const loginSlice = createSlice({
  name : 'login',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.dataSource = action.payload;
    }
  },
})

export const loginReducer =  loginSlice.reducer