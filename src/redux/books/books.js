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
