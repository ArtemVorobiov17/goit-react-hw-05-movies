import React, {useState} from 'react';
import PropTypes from 'prop-types';
import css from './Search.module.css';

export const Search = ({ onSubmit }) => {
    const [queryValue, setQueryValue] = useState(''); 

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(queryValue);
        setQueryValue('');
    };

    const handleInputChange = event => {
        setQueryValue(event.target.value);
    }

    return (
        <>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='serchQuery'
                    value={queryValue}
                    onChange={handleInputChange}
                    placeholder='Enter movie title...'
                />
                <button type='submit'>Search</button>
            </form>
        </>
    );
}

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};