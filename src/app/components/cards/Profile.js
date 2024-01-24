import React from 'react'

export const Profile = () => {
  let profName = "Isaac Arias";
  let profTitle = "Ingeniero en Sistemas y Computación"
  return (
    <section className='profile-card'>
    <span className='name'>{profName}</span>
    <span className='title'>{profTitle}</span>
    </section>
  )
}
