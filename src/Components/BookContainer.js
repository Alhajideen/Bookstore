import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, selectAllBooks } from '../redux/books/books';
import Book from './Book';
import InputBook from './InputBook';
// import { removeBook } from '../redux/books/books';
// import { getBooks } from '../redux/books/books';

function BookContainer() {
  const { books } = useSelector(selectAllBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <section className="bookContainer">
        {books.map((book) => (
          <div key={book.id}>
            <div className="book-details">
              <Book props={book} />
            </div>
            <div className="book-actions">
              <button type="button">Remove</button>
            </div>
          </div>
        ))}
      </section>
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
