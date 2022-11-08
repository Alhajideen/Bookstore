import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { removeBook } from '../redux/books/books';

function BookContainer() {
  const bookArr = useSelector((state) => state.book);
  const dispatch = useDispatch();
  return (
    <div>
      <section className="bookContainer">
        {bookArr.map((book) => (
          <div key={book.id}>
            <div className="book-details">
              <Book props={book} />
            </div>
            <div className="book-actions">
              <button
                type="button"
                onClick={() => dispatch(removeBook(book.id))}
              >
                Remove
              </button>
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
