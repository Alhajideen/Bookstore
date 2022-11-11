import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBooks, removeBook, removeBooks, selectAllBooks,
} from '../redux/books/books';
import Book from './Book';
import InputBook from './InputBook';

function BookContainer() {
  const { books } = useSelector(selectAllBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
    dispatch(removeBooks(id));
    // setTimeout(() => {
    //   dispatch(getBooks());
    // }, 1000);
  };

  return (
    <div>
      <section className="bookContainer">
        {books.map((book) => (
          <div className="book-items" key={book.id}>
            <div className="book-ppt">
              <div className="a-book">
                <div className="book-details">
                  <h3 className="book-category">{book.category}</h3>
                  <Book props={book} />
                </div>
                <div className="book-actions">
                  <button type="button">Comments</button>
                  <span className="border" />
                  <button type="button" onClick={() => handleRemove(book.id)}>
                    Remove
                  </button>
                  <span className="border" />
                  <button type="button">Edit</button>
                </div>
              </div>
              <div className="progress-bar">
                <div className="circular-progress" />
                <div className="progress-stats">
                  <p className="percentage">65%</p>
                  <p className="completed">Completed</p>
                </div>
              </div>
              <div className="box-border" />
              <div className="current">
                <p className="current-chapter">CURRENT CHAPTER</p>
                <p className="chapter">Chapter 17</p>
                <button type="button" className="update-btn">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="divide-border" />
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
