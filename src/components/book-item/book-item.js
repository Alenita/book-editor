import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({book}) => {
    return (
        <div className='book-item'>
            <Link to={`/books/${book.id}`} className='book-item__details link'>
                { book.cover && <img className='book-item__image' src={book.cover} alt={book.title} width="218" height="327"/> }
                { !book.cover && 
                    <div className='book-item_no-cover'>
                        <h3 className='book-item__title title'>
                            {book.title}
                        </h3>
                        <p className='book-item__author'>
                            by {book.authorName + ' ' + book.authorLastName}
                        </p>
                    </div>
                }
            </Link>
        </div>
    )
}

export default  BookItem;