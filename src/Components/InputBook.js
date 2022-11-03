import React from 'react';

function InputBook() {
  return (
    <div>
      <form className="input-book">
        <div className="book-title">
          <input type="text" placeholder="Book Title" />
        </div>
        <div className="book-author">
          <input type="text" placeholder="Book Author" />
        </div>
        <div className="add-btn">
          <button type="button">Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default InputBook;
