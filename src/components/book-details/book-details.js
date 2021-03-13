import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../header/header.js';
import useFetch from '../use-fetch/use-fetch.js';

const BookDetails = () => {
    const { id } = useParams();
    const { books:book, error, isLoading } = useFetch('http://localhost:8000/books/' + id);
    const history = useHistory();
    const handleDelete = () => {
        setTimeout(() => {
            fetch('http://localhost:8000/books/' + id, {
            method: 'DELETE'
        }).then(() => { 
            history.push('/');
            })
        }, 500)
    }

    return (
        <div className='book-details'>
            <Header />
            { isLoading && <p>Is loading data...</p> }
            { error && <p>Something happened - {error}</p> }
            { book && 
                <div className='book-details__wrap'>
                    { book.cover ? <img 
                        className='book-details__img'
                        src={book.cover}
                        alt={book.title} 
                        /> : <img 
                        className='book-details__img'
                        src='/img/1984.png'
                        alt={book.title} 
                        /> }
                    <div>
                        <h2>{book.title}</h2>
                        <p className='text'>Was written by {book.authorName} {book.authorLastName}</p>
                        <p className='text'>Pages: {book.pages}</p>
                        { book.publisher && <p className='text'>Publisher: {book.publisher}</p> }
                        { book.published && <p className='text'>First published in: {book.published}</p> }
                        { book.publicationDate && <p className='text'>Year: {book.publicationDate}</p> }
                        { book.isbn && <p className='text'>ISBN: {book.isbn}</p> }
                        <button className='book-details__btn button' onClick={handleDelete} >Delete book</button>
                    </div>
                </div>
                } 
        </div>
    );
}
 
export default BookDetails;