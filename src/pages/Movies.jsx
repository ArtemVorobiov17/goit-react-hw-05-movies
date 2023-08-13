import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MovieList/MovieList';
import { Search } from 'components/Search/Search';
import { fetchSearchMovies } from 'services/api';



const Movie = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const handleSubmit = value => {
        setSearchParams({ query: value });
    };

    useEffect(() => {
        if (!query) return;
        fetchSearchMovies(query)
            .then(res => setMovies([...res]));
    }, [query]);


    return (
        <>
            <Search location={location} onSubmit={handleSubmit} />
            
            <MoviesList movies={movies} />
            
            
        </>
    );    
}


export default Movie;