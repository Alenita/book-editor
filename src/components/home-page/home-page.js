import React from 'react';

import BooksList from '../books-list/books-list';
import useFetch from '../use-fetch/use-fetch.js';
import Header from '../header/header.js';

const HomePage = () => {
    // const url = localStorage.length > 0 ? `http://localhost:8000/books?_sort=${localStorage.getItem}&_order=asc` : 'http://localhost:8000/books';

    const { books, isLoading, error } = useFetch('http://localhost:8000/books');
    return (
        <div className='home-page'>
            <Header isHomepage={true}  books={books}/>
            { isLoading && <p>Is loading data...</p> }
            { error && <p className='error'>Something happened - {error}</p> }
            { books && <BooksList books={books} /> }
            
        </div>
    );
}
 
export default HomePage;