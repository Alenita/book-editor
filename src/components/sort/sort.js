import React, { useState, useEffect } from 'react';

const Sort = () => {
    const [value, setValue] = useState('');
    useEffect(() => {
        localStorage.setItem('sort', value);
    }, [value]);
    return(
        <div className='sort'>
            <select
                className='sort__select'
                onChange={(e)=>setValue(e.target.value)}>
                <option value='title'>Sort by title</option>
                <option value='published'>Sort by date</option>
            </select>
        </div>
    );
}
 
export default Sort;
