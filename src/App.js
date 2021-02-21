import React from 'react';

import BooksList from './components/books-list/books-list';
import books from './mocks/books.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <BooksList books={books}/>
      <Footer />
    </div>
  );
}

export default App;
