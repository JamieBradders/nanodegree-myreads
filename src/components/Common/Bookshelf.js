// Bookshelf component
// <Bookshelf />
// Should take a title and books
import React from 'react';

import Books from './Books';

const Bookshelf = ({ title, books, shelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ title }</h2>
    <Books books={books} shelf={shelf} />
  </div>
);

// PropTypes...

export default Bookshelf;