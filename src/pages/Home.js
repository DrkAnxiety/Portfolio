import React from 'react'
import '../stylesheets/Home.css'

export const Home = () => {
  return (
    <article className='home-container'>
      <section className='home-first-section'>
        <span>Hi I'm</span>
        <h1>
          Alejandro <span>Morales</span>
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button>Let's talk</button>
      </section>
      <section className='home-second-section'>
        <div className='img-container'></div>
      </section>
    </article>
  )
}
