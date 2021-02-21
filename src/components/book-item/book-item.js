import React from 'react';

const BookItem = ({book}) => {
    return (
        <div className='book-item'>
            <p className='book_title'>
                {book.title}
            </p>
            <p className='book_author'>
                by {book.authorName + ' ' + book.authorLastName}
            </p>
            <image src={book.cover} alt={book.title}></image>
            <button className='book_details'>
                More details
            </button>
        </div>
    )
}

export default  BookItem;