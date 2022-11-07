import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
