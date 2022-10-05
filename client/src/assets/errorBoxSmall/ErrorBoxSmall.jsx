import React from 'react';
import "./errorBoxSmall.scss";
import ErrorIcon from '@mui/icons-material/Error';

export default function ErrorBoxSmall({input}) {
  return (
    <div className='errorBoxSmall'>
        <div className="error__container">
            <ErrorIcon className='error__icon'/>
            <span className='error__text'>{input}</span>
        </div>
    </div>
  );
}
