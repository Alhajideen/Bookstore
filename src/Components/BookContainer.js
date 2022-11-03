import React from 'react';
import Book from './Book';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function BookContainer() {
  return (
    <div>
      <Book />
    </div>
  );
}

export default BookContainer;
