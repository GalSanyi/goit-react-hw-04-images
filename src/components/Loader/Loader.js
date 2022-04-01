import { ImSpinner } from 'react-icons/im';
import React from 'react';
import s from './Loader.module.css';

export default function PokemonPendingView() {
  return (
    <div role="alert">
      <div>
        <ImSpinner size="32" className={s.iconSpin} />
        ...download
      </div>
    </div>
  );
}
