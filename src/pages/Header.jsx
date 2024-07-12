import React, { useState } from 'react'

function Header() {

  const toggle = () => {
    let menu = document.querySelector('.menu-links')
    let icon = document.querySelector('.non-desktop-icon')

    menu.classList.toggle('open')
    icon.classList.toggle('open')
  }


  
  return <>
  <header>
    <nav id='desktop-nav'>
      <div className="logo">Anbu Liyon</div>
      <div className="nav-links">
        <li className='a' onClick={()=>location.href='#about'}>About</li>
        <li className='a'>Skills</li>
        <li className='a'>Projects</li>
        <li className='a'>Contact</li>
      </div> 
      
    </nav>
    <nav id='non-desktop-nav'>
      <div className="logo">Anbu liyon</div>
      <div className="non-desktop-menu" >
        <div className="non-desktop-icon" onClick={toggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links" onClick={toggle}>
        <li className='a'>About</li>
        <li className='a'>Skills</li>
        <li className='a'>Projects</li>
        <li className='a'>Contact</li>
      </div> 
      </div>
      
    </nav>  
  </header>
  </>
}

export default Header