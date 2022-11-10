import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, removeBook, selectAllBooks } from '../redux/books/books';
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
    setTimeout(() => {
      dispatch(getBooks());
    }, 1000);
  };

  return (
    <div>
      <section className="bookContainer">
        {books.map((book) => (
          <div className="book-items" key={book.id}>
            <div className="book-ppt">
              <div>
                <div className="book-details">
                  <h3>{book.category}</h3>
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
                <div className="circular-progress">
                  <div className="progress-stats">
                    <p>65%</p>
                    <p>Completed</p>
                  </div>
                </div>
              </div>
              <div className="current">
                <p>CURRENT CHAPTER</p>
                <p>CUhapter 17</p>
                <button type="button">UPDATE PROGRESS</button>
              </div>
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
