import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Return of Ikenga',
    author: 'Chukwuemeka Ohuka',
  },
  {
    id: uuidv4(),
    title: 'Our Husband has gone Mad again',
    author: 'Onoja Victor',
  },
  {
    id: uuidv4(),
    title: 'Chike and the River',
    author: 'Chinua Achebe',
  },
];

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => {
      const newBooks = [...state.filter((book) => book.id !== action.payload)];
      return newBooks;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
