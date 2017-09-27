// Books component
// This takes an array of books and renders from there...
import React from 'react';

import Book from './Book';

const Books = ({ books }) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      { books.map(book => <li><Book /></li>) }
    </ol>
  </div>
);

export default Books;