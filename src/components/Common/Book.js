// Book Component
// Renders the actual book
import React from 'react';
import PropTypes from 'prop-types';

import Changer from './Changer';

const Book = ({ image, title, authors }) => {

  const bookProps = {
    style: {
      backgroundImage: `url('${image}')`,
    }
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" {...bookProps} />

        <Changer/>

        <div className="book-title">{title}</div>
        {
          authors.map((author, index) => (
            <div key={index} className="book-authors">{author}</div>
          ))
        }
      </div>
    </div>
    )
};

Book.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;