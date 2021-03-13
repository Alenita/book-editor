import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './components/homepage/homepage.js';
import Footer from './components/footer/footer.js';
import BookDetails from './components/book-details/book-details.js';


function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Homepage />
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
