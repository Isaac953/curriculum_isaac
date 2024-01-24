import React from 'react';
import "./Cards.scss";

export const Photo = () => {
    let logo = '../img/photo_cv.jpg'
  return (
    <figure className='photo-card'>
        <img src={logo} alt="Logo" />
    </figure>
  )
}
