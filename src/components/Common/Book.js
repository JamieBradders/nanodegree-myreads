// Book Component
// Renders the actual book
import React from 'react';

import Changer from './Changer';

const Book = ({ image, title, author }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" />

      <Changer />

      <div className="book-title">{ title }</div>
      <div className="book-authors">{ author }</div>
    </div>
  </div>
);

export default Book;