import React from 'react';
import s from './Button.module.css';

export default function Button({ handleLoadMore }) {
  return (
    <button onClick={handleLoadMore} type="button" className={s.Button}>
      Load more
    </button>
  );
}
