import React from 'react';
import './submitbutton.scss';

export default function SubmitButton(props) {
  const { onClick , IsDisabled , text } = props;
  return (
    <div>
      <button className='submit' onClick={onClick} disabled={IsDisabled}>{ text}</button>
    </div>
  )
}
