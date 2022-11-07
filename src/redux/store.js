import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookAction';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
