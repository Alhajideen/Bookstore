import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

export const categorySlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    checkStatus: (state) => [...state, { msg: 'Under Construction' }],
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
