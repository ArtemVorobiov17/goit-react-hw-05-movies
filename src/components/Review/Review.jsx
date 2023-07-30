import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchInformation } from "services/api";
import css from './Review.module.css';


export const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        fetchInformation(movieId, 'reviews')
            .then(res => {
                const reviewArr = res.results;
                setReview([...reviewArr]);
            })
            .catch(error => console.log(error))
    }, [movieId]);

    return (
        <div>
            <ul className={css.review__list}>
                {review.length ? (
                    review.map(({ id, author, content }) => (
                    <li className={css.review__item} key={id}>
                        <p className={css.review__author}>Author:{author}</p>
                        <p className={css.review__comment}>{content}</p>
                    </li>
                ))
                ) : (<div>Wie don't have any reviews for this movie</div>)
                }
            </ul>
        </div>
    );
}