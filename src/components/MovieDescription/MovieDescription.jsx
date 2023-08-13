import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useRef, Suspense } from "react";
import ooops from './ooops.png';
import PropTypes from 'prop-types';
import css from './MovieDescription.module.css';


const MovieDescription = ({ details }) => {
    const { release_date, title, overview, genres,
        vote_average, poster_path } = details;
    const date = new Date(release_date).getFullYear();
    const location = useLocation();
    const backLink = useRef(location.state?.from ??'./movies');
    
    return (
        <>  
            <Link to={backLink.current}>Go Back</Link>
            {details && (
                <>
                    <div className={css.container}>
                        <img
                            src={poster_path
                                ? 'https://image.tmdb.org/t/p/w300' + poster_path
                                : ooops
                        }
                            width={250}
                            height={400}
                            alt="poster"
                        />
                        <div>
                            <h2 className={css.description__title}>
                                {title} ({date})
                            </h2>
                            <p>User score: {Math.round(vote_average * 10)}%</p>
                            <h3>Overview</h3>
                            <p>{overview}</p>
                            <h3>Genres</h3>
                            {genres
                                ? genres.map(genre => genre.name + ' ')
                                : 'Not information'}
                        </div>
                    </div>
                    <div>
                        <h3>Additional information</h3>
                        <ul>
                            <li>
                                <NavLink to='cast'>Cast</NavLink>
                            </li>
                            <li>
                                <NavLink to='review'>Review</NavLink>
                            </li>
                        </ul>
                    </div>
                </>
            )}
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};



MovieDescription.propTypes = {
    details: PropTypes.shape({
        release_date: PropTypes.string,
        title: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
        })),
        vote_average: PropTypes.number,
        poster_path: PropTypes.string,
    }).isRequired,
};


export default MovieDescription;