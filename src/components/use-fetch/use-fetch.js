import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            // if (localStorage.length > 0) {
            //     let key = localStorage.getItem('sort');
            //     fetch(`${url}_sort=${key}&_order=asc`)
            //     .then(res => {
            //         if(!res.ok) {
            //             throw Error('Could not fetch the data')
            //         }
            //         return res.json();
            //     })
            //     .then(data => {
            //         setBooks(data);
            //         setIsLoading(false);
            //         setError(null);
            //     })
            //     .catch(err => {
            //         setIsLoading(false);
            //         setError(err.message);
            //     })
            //     return { books, isLoading, error };
            // }
            
            // else
            // {
                fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not fetch the data')
                    }
                    return res.json();
                })
                .then(data => {
                    setBooks(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setIsLoading(false);
                    setError(err.message);
                })
            //     return { books, isLoading, error };
            // }
            }, 
            500);
        }, [url]
    );
    
    return { books, isLoading, error };
}
 
export default useFetch;