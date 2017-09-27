// Bookshelf component
// <Bookshelf />
// Should take a title and books
import React from 'react';

const Bookshelf = ({ title, books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ title }</h2>
  </div>
);

export default Bookshelf;