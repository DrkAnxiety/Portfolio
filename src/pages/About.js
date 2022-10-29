import React from 'react'
import '../stylesheets/About.css'
import Profile from '../images/profile.jpg'
export const About = () => {
  return (
    <article className='about-container'>
      <section className='profile-pic-content'>
        <img src={Profile} alt='/' className='img-about'/>
      </section>
      <section className='about-content'>
        
      </section>
    </article>
  )
}
