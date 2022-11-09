import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const categorySlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    checkStatus: (state, action) => [...state, action.payload],
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
