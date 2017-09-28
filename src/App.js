import React from 'react'
import * as BooksAPI from './BooksAPI'

import Title from './components/Common/Title';
import Search from './components/Search/Search';
import Bookshelf from "./components/Common/Bookshelf";

import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false,
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({
        books,
      });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <div className="list-books">
            <Title text="MyReads" />

            <div className="list-books-content">
              <div>
                <Bookshelf title="Currently Reading" shelf="currentlyReading" books={books} />
                <Bookshelf title="Want to Read" shelf="wantToRead" books={books} />
                <Bookshelf title="Read" shelf="read" books={books} />
              </div>
            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
