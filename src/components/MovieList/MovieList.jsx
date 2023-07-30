import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul className={css.movie__list}>
            {movies.map(({ id, title }) =>
                title && (
                    <li key={id}>
                        <Link
                            key={id}
                            to={`/movies/${id}`}
                            state={{ from: location }}
                        >
                            {title}
                        </Link>
                    </li>
                )
            )}
        </ul>
    );
};


MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
        })
    ).isRequired,
};