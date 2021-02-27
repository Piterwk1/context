/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <Navbar />
          <BookList />
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
