import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/home-page/home-page.js';
import Footer from './components/footer/footer.js';
import BookDetails from './components/book-details/book-details.js';


function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/books/:id'>
            <BookDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
