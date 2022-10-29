import React, { useState } from 'react'
import '../stylesheets/Header.css'
import { FaBars as Menu } from 'react-icons/fa'
import { MdClose as Close } from 'react-icons/md'
import { Logo } from './Logo'

export const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickMenu = () => {
    setIsActive(!isActive)
    setIsOpen(!isOpen)
  }

  return (
    <header className='header-container'>
      <nav className='header-content'>
      <Logo />

        <ul className={(isOpen? 'open menu-content' : 'menu-content')}>
          <li className='menu-item'>
            <a href='#home'>Home</a>
          </li>
          <li className='menu-item'>
            <a href='#about'>About</a>
          </li>
          <li className='menu-item'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='menu-item'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='menu-item'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        <div className='burguer-menu' onClick={handleClickMenu}>
          {isActive ? (
            <Close className='close-icon' />
          ) : (
            <Menu className='burguer-icon' />
          )}
        </div>
      </nav>
    </header>
  )
}
