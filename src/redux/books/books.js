import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

// const dispatch = useDispatch();

export const getBooks = createAsyncThunk('GetBooks', () => {
  const data = fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AvIE67KLnFDsdhR2CWwG/books',
  ).then((res) => res.json());

  return data;
});

export const addBooks = createAsyncThunk('addBooks', async (obj) => {
  // const obj = {
  //   item_id: 'item1',
  //   title: 'The Great Gatsby',
  //   author: 'John Smith',
  //   category: 'Fiction',
  // };
  try {
    const data = await axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AvIE67KLnFDsdhR2CWwG/books',
      obj,
    );
    console.log(data);
    return data.data;
  } catch (err) {
    console.log(err);
    return err;
  }
});

// const initialState = [
//   {
//     id: uuidv4(),
//     title: 'The Return of Ikenga',
//     author: 'Chukwuemeka Ohuka',
//   },
//   {
//     id: uuidv4(),
//     title: 'Our Husband has gone Mad again',
//     author: 'Onoja Victor',
//   },
//   {
//     id: uuidv4(),
//     title: 'Chike and the River',
//     author: 'Chinua Achebe',
//   },
// ];
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
      });
    },
    removeBook: (state, action) => {
      const newBooks = [...state.filter((book) => book.id !== action.payload)];
      return newBooks;
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
        console.log(action.payload);
        arr.map(([key, value]) => {
          const data = value.map((x) => ({ ...x, id: key }));
          newArr.push(...data);
          console.log(newArr);
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
      }));
    // [addBooks.fulfilled]: (state, action) => [...state.books, action.payload],
    // [addBooks.fulfilled]: ,
  },
});
/* eslint-disable no-param-reassign */

export const selectAllBooks = (state) => state.book;

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
