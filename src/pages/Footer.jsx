import React from 'react'

function Footer() {
  return <>
    <footer className=''>
    <nav >
     
      <div className="nav-links">
        <li className='a' onClick={()=>location.href='#about'}>About</li>
        <li className='a' onClick={()=>location.href='#skills'}>Skills</li>
        <li className='a' onClick={()=>location.href='#Projects'}>Projects</li>
        <li className='a' onClick={()=>location.href='#contact'}>Contact</li>
      </div> 
      
    </nav>
    <p className='text-center '>Copyrights &copy; 2024 Anbu liyon. All Rights Reserved.</p>
    </footer>
  
  </>
}

export default Footer