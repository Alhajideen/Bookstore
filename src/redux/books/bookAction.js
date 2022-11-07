import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.splice(action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
