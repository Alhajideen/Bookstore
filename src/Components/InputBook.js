import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBooks, getBooks } from '../redux/books/books';

function InputBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cat, setCat] = useState('');
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newBook = {
      item_id: uuid(),
      title,
      author,
      category: cat,
    };
    dispatch(addBooks(newBook));
    setTimeout(() => {
      dispatch(getBooks());
    }, 1000);
  };
  return (
    <div className="input-form">
      <div className="input-title">
        <h2>ADD NEW BOOK</h2>
      </div>
      <form className="input-book">
        <div className="book-title">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="book-author">
          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="book-cat">
          <input
            type="text"
            placeholder="Book Category"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />
        </div>
        <div className="add-btn">
          <button type="button" onClick={() => handleAdd()}>
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputBook;
