import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import catReducer from './categories/categories';

export const store = configureStore({
  reducer: {
    book: bookReducer,
    categories: catReducer,
  },
});
