import React from 'react'
import LogoImage from '../images/logo.svg'
import '../stylesheets/Logo.css'

export const Logo = () => {
  return (
    <div className='logo'>
      <img src={LogoImage} alt='/' />
      <span className='logo-title'>LAMV</span>
    </div>
  )
}
