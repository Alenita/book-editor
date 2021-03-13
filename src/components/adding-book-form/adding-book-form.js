import React, {useState} from 'react';

const AddingBookForm = (props) => {
    const [title, setTitle] =useState('');
    const [authorName, setName] =useState('');
    const [authorLastName, setLastName] =useState('');
    const [pages, setPages] =useState('');
    const [publisher, setPublisher] =useState('');
    const [published, setPublished] =useState('');
    const [publicationDate, setDate] =useState('');
    const [isbn, setIsbn] =useState('');
    const [cover, setImageCover] =useState('');

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, authorName, authorLastName, pages, publisher, published, publicationDate, isbn, cover};
        
        setIsPending(true);

        fetch('http://localhost:8000/books/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }).then(() => {
            console.log('new book added');
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
                <h2 className='popup__title title'>Add a new book</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        className='popup__input'
                        placeholder='Book title'
                        type='text' 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        /> 
                    <input 
                        className='popup__input'
                        type='text' 
                        placeholder='Book author firstname'
                        required
                        value={authorName}
                        onChange={(e) => setName(e.target.value)}
                        />  
                    <input 
                        className='popup__input'
                        placeholder='Last name'
                        type='text' 
                        required
                        value={authorLastName}
                        onChange={(e) => setLastName(e.target.value)}
                        /> 
                    <input 
                        className='popup__input'
                        placeholder='Number of pages'
                        type='number' 
                        min='1'
                        max='10000'
                        required
                        value={pages}
                        onChange={(e) => setPages(e.target.value)}
                        />
                    <input 
                        className='popup__input'
                        placeholder='Publisher'
                        type='text' 
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                        />  
                    <input 
                        className='popup__input'
                        placeholder='Year of publication'
                        type='date'
                        min="1800-01-01" 
                        value={published}
                        onChange={(e) => setPublished(e.target.value)}
                        />   
                    <input 
                        className='popup__input'
                        placeholder='Date of book publication'
                        type='date' 
                        min="1800-01-01"
                        required
                        value={publicationDate}
                        onChange={(e) => setDate(e.target.value)}
                        />   
                    <input 
                        className='popup__input'
                        placeholder='ISBN (10 to 13 digits)'
                        pattern='[0-9]{10,13}'
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)} 
                        /> 
                    <input 
                        className='popup__input'
                        placeholder='Book cover'
                        type='url'
                        value={cover}
                        onChange={(e) => setImageCover(e.target.value)}
                    />
                    { !isPending && <button className='button'>Add book</button> }
                    { isPending && <button className='button'  disabled>Adding book</button> }
                </form> 
            </div>
        </div>
    ) : '';
}
 
export default AddingBookForm;