import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const bookSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addBook: (state) => {
      state.value += 1;
    },
    removeBook: (state) => {
      state.value -= 1;
    }
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
