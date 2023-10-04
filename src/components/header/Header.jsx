import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/me.jpeg';
import HeaderSocials from './headerSocials';

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm</h5>
        <h1>Akash Singh</h1>
        <h5 className="text-light">Fronted Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll_down'>Scroll down</a>        
      </div>
    </header>
  )
}

export default Header
