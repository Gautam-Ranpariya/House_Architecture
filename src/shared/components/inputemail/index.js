import React from 'react';
import './inputemail.scss';

export default function InputEmail(props) {
  const { placeholder , onChange, value  } = props;
  return (
    <div className='inputUserEmail'>
      <input type="email" name="email" id="heroBannerEmail" placeholder={placeholder} onChange={onChange} value={value} className='inputEmail' />
    </div>
  )
}
