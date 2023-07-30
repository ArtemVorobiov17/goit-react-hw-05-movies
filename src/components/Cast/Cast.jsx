import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchInformation } from "services/api";
import photo from './photo.png';
import css from './Cast.module.css';


export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        fetchInformation(movieId, 'credits')
            .then(res => {
                setCast(res.cast);
            })
            .catch(error => console.log(error));
    }, [movieId]);

    return (
        <div>
            {cast.length > 0 ? (
                <ul className={css.cast__list}>
                    {cast.map(({ id, profile_path, name, character }) => (
                        <li className={css.cast__item} key={id}>
                            <img
                                src={profile_path
                                    ? 'https://image.tmdb.org/t/p/w300' + profile_path
                                    : photo
                                }
                                alt={name}
                                height='120'
                                width='80'
                                loading="lazy"
                            />
                            <div className={css.cast__text}>
                                <p className={css.cast__name}>{name}</p>
                                {character && <p className={css.cast__character}>{character}</p>}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No cast information available.</p>
            )}
        </div>
    );
}