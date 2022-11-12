import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
    toast.success('Book added successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return data.data;
  } catch (err) {
    toast.error('Oooops! An error occured. Try again', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return err;
  }
});

export const removeBook = createAsyncThunk('removeBook', async (id) => {
  try {
    const data = await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YaBC90awykY2rG0eunC7/books/${id}`,
    );
    toast.warn('Book removed from store', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return data.data;
  } catch (err) {
    toast.error('Oooops! An error occured. Try again', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
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
  reducers: {
    addBook(state, action) {
      const newBook = action.payload;
      state.books.push({
        id: newBook.id,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
      });
    },
    removeBooks(state, action) {
      const bookId = action.payload;
      const filterBooks = state.books.filter((book) => book.id !== bookId);
      return { books: filterBooks };
    },
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

export const { addBook, removeBooks } = bookSlice.actions;

export const selectAllBooks = (state) => state.book;

export default bookSlice.reducer;
