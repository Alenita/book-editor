import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
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
            }, 500);
        }, [url]);
    console.log(books);
    return { books, isLoading, error };
}
 
export default useFetch;