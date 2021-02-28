/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <Navbar />
            <BookList />
            <ThemeToggle />
          </AuthContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
