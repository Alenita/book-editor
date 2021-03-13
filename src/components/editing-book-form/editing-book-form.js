import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditingBookForm = (props) => {
    const { id } = useParams();
    const [book, setBook] = useState('');
    useEffect(() => {
        fetch('http://localhost:8000/books/' + id)
            .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data')
            }
            return res.json();
        })
        .then(data => {
            setBook(data);
        })
        .catch(err => {
            console.log(err)
        })
    },[id]) 

    let maxYear = new Date().getFullYear();
    const [title, setTitle] = useState(book.title);
    const [authorName, setName] = useState(book.authorName);
    const [authorLastName, setLastName] = useState(book.authorLastName);
    const [pages, setPages] = useState(book.pages);
    const [publisher, setPublisher] = useState(book.publisher);
    const [published, setPublished] = useState(book.published);
    const [publicationDate, setDate] = useState(book.publicationDate);
    const [isbn, setIsbn] = useState(book.isbn);
    const [cover, setImageCover] = useState(book.cover);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, authorName, authorLastName, pages, publisher, published, publicationDate, isbn, cover };
        
        setIsPending(true);

        fetch('http://localhost:8000/books/'+ id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }).then(() => {
            setIsPending(false);
            props.setPopup(false)
        })
    }

    return (props.isPopupOpen) ? (
        <div className='popup'>
            <div className='popup__content'>
                <div 
                    className="popup__close"
                    onClick={() => props.setPopup(false)}
                >
                    <svg width="28" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" strokeWidth="3" d="M1.939 25.939l24-24M2.061 1.939l24 24"/></svg>
                </div>
                <h2 className='popup__title title'>Edit book details</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        className='popup__input'
                        placeholder='Book title'
                        type='text' 
                        required
                        value={book.title}
                        name='title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input 
                        className='popup__input'
                        type='text' 
                        placeholder='Book author firstname'
                        required
                        value={book.authorName}
                        onChange={(e) => setName(e.target.value)}
                        />
                    <input 
                        className='popup__input'
                        placeholder='Last name'
                        type='text' 
                        required
                        value={book.authorLastName}
                        onChange={(e) => setLastName(e.target.value)}
                        /> 
                    <input 
                        className='popup__input'
                        placeholder='Number of pages'
                        type='number' 
                        min='1'
                        max='10000'
                        required
                        value={book.pages}
                        onChange={(e) => setPages(e.target.value)}
                        />
                    <input 
                        className='popup__input'
                        placeholder='Publisher'
                        type='text' 
                        value={book.publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                        />
                    <input 
                        className='popup__input'
                        placeholder='Year of publication'
                        type='number'
                        min='1800'
                        max={maxYear}
                        value={book.published}
                        onChange={(e) => setPublished(e.target.value)}
                        />
                    <input 
                        className='popup__input'
                        placeholder='Date of book publication'
                        type='date' 
                        min="1800-01-01"
                        required
                        value={book.publicationDate}
                        onChange={(e) => setDate(e.target.value)}
                        /> 
                    <input 
                        className='popup__input'
                        placeholder='ISBN (10 or 13 digits)'
                        pattern='[0-9]{10,13}'
                        value={book.isbn}
                        onChange={(e) => setIsbn(e.target.value)} 
                        /> 
                    <input 
                        className='popup__input'
                        placeholder='Book cover URL'
                        value={book.cover}
                        onChange={(e) => setImageCover(e.target.value)}
                    />
                    { !isPending && <button className='button popup__button' >Save updates</button> }
                    { isPending && <button className='button popup__button'  disabled>Saving</button> }
                </form> 
            </div>
        </div>
    ) : '';
}
 
export default EditingBookForm;