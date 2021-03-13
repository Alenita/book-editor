import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import AddingBookForm from '../adding-book-form/adding-book-form.js';
// import { Link } from 'react-router-dom';

// import /add-book from '../edit-button/edit-button.js';
import Sort from '../sort/sort.js';

const Header = (props) => {
    const [popupButton, setPopupButton] = useState(false);
    const history = useHistory();

    return(
        <header className='header'>
            { props.isHomepage &&
                <div className='header__wrap'>
                    <Sort />
                    <button
                        className='button'
                        onClick={() => setPopupButton(true)}>Add new book</button>
                        <AddingBookForm 
                        isPopupOpen={popupButton} 
                        setPopup={setPopupButton}
                        />                    
                </div>
            }
            { !props.isHomepage &&
                <div className='header__wrap'>
                    <button
                        className='button'
                        onClick={() => history.push('/')}>Homepage</button>
                    <button
                        className='button'
                        onClick={() => setPopupButton(true)}>Edit book details</button>
                    <AddingBookForm isPopupOpen={popupButton} setPopup={setPopupButton}/>
                </div>
            }
        </header>
    )
}

export default Header;