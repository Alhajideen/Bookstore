import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk('GetBooks', () => {
  const data = fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YaBC90awykY2rG0eunC7/books',
  ).then((res) => res.json());
  return data;
});

export const addBooks = createAsyncThunk('addBooks', async (obj) => {
  try {
    const data = await axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YaBC90awykY2rG0eunC7/books',
      obj,
    );
    return data.data;
  } catch (err) {
    return err;
  }
});

export const removeBook = createAsyncThunk('removeBook', async (id) => {
  try {
    const data = await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YaBC90awykY2rG0eunC7/books/${id}`,
    );
    return data.data;
  } catch (err) {
    return err;
  }
});

/* eslint-disable no-param-reassign */
export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  extraReducers: (Builder) => {
    Builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        const newArr = [];
        const arr = Object.entries(action.payload);
        arr.map(([key, value]) => {
          const data = value.map((x) => ({ ...x, id: key }));
          newArr.push(...data);
          state.books = newArr;
          return state.books;
        });
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addBooks.fulfilled, (state, { payload }) => ({
        ...state,
        loading: payload,
      }))
      .addCase(removeBook.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
/* eslint-disable no-param-reassign */

export const selectAllBooks = (state) => state.book;

export default bookSlice.reducer;
