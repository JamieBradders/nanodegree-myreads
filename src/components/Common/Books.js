// Books component
// This takes an array of books and renders from there...
import React from 'react';

import Book from './Book';

const Books = ({ books, shelf }) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      {
        books.filter(book => book.shelf === shelf).map((book, index) => (
          <li key={index}>
            <Book
              authors={book.authors}
              image={book.imageLinks.thumbnail}
              title={book.title} />
          </li>
        ))
      }
    </ol>
  </div>
);

export default Books;