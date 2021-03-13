import React, { useState, useEffect } from 'react';

const Sort = (props) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        localStorage.setItem('sort', value);
    }, [value]
    );

    const handleSort = (e) => {
        setValue(e.target.value);
        props.sort(value)
    }

    return(
        <div className='sort'>
            <select
                className='sort__select'
                onChange={handleSort}>
                <option value='title'>Sort by title</option>
                <option value='published'>Sort by date</option>
            </select>
        </div>
    );
}
 
export default Sort;
