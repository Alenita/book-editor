import React from 'react';
import BookItem from '../book-item/book-item.js';

const BooksList = ({books}) => {
    return (
        <div className='books-list'>
            {books.map((book) => {
                return (
                    <BookItem
                        key={book.id}
                        book={book}
                    />
                );    
            })}
        </div>
    )
}

export default  BooksList;