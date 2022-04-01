import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

import React from 'react';

export default function Searchbar({ query, handleSetQuery, handleSubmitForm }) {
  return (
    <div>
      <header className={s.Searchbar}>
        <form onSubmit={handleSubmitForm} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={query}
            onChange={handleSetQuery}
            name="query"
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
}
Searchbar.propTypes = {
  query: PropTypes.string.isRequired,
  handleSetQuery: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
};
