import React from 'react';
import "./Photo.scss";

export const Photo = () => {
    let logo = '/cv_isaac/img/photo_cv.jpg'
  return (
    <figure className='photo-card'>
        <img src={logo} alt="Logo" />
    </figure>
  )
}
