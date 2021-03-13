import React, { useState, useEffect } from 'react';

import BooksList from '../books-list/books-list';
import useFetch from '../use-fetch/use-fetch.js';
import Header from '../header/header.js';

const Homepage = () => {
    // const [sortType, setSortType] = useState(localStorage.getItem('sort'));
    const { books, isLoading, error } = useFetch('http://localhost:8000/books/');
    console.log(books);
    const [sortedData, setSortedData] = useState([]);
    const [sortType, setSortType] = useState('albums');

    useEffect (() => {
        if (books) {
        const sortValue = localStorage.getItem('sort');
        sortValue ? setSortedData([...books].sort((a, b) => a[sortValue] - b[sortValue] )) : setSortedData([...books])
    }
    },[books, sortType])
    

    return (
        <div className='home-page'>
            <Header isHomepage={true} sort={setSortType}/>
            { isLoading && <p>Is loading data...</p> }
            { error && <p className='error'>Something happened - {error}</p> }
            { books && <BooksList books={sortedData} /> }
        </div>
    );
}
 
export default Homepage;