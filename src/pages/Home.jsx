import { useEffect, useState } from "react";
import { fetchTrendMovies } from "services/api";
import { MoviesList } from "components/MovieList/MovieList";


export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendMovies()
            .then(res => setMovies(res));
    }, []);

    return (
        <>
            <h1>Trending today</h1>
            {movies.length > 0
                ? <MoviesList movies={movies} />
                : <div>Loading...</div>
            }
        </>
    );
};