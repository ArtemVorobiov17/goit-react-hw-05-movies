import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  MovieDescription  from "components/MovieDescription/MovieDescription";
import { fetchMovieDetails } from "services/api";


const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        if (!movieId) return;
        fetchMovieDetails(movieId)
            .then(res => setDetails({ ...res }))
            .catch(error => console.log(error));
    }, [movieId]);

    /*return details && Object.keys(details).length > 0 ? (
        <MovieDescription details={details} />
    ) : (<div>Loading...</div>);*/
    return <MovieDescription details={details} />
};


export default MovieDetails;