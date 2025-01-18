import React from 'react'
import fileSaver from 'file-saver'
import profilePic from '../assets/doodleProfilePic.png'
import cv from '../assets/newcvs.pdf'
import { Link, useNavigate } from 'react-router-dom'

function HeroSection() {
    // let navigate = useNavigate()
    let saveFile = () =>{
        fileSaver.saveAs(cv,'anbuliyonResume','anbuliyonResume')
    }
  return <>
  <section id="profile">
    <div className="sec_pic-container">
        <img src={profilePic} alt="Anbu Liyon Profile Pic" loading='lazy'/>
    </div>
    <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title">Anbu Liyon</h1>
        <p className="section_text_p2">MERN Stack Web Developer</p>
        <div className="btn-container">
            <button className='btn btn-ghost btn-outline' onClick={saveFile}>Download Resume</button>
            <button className='btn btn-outline ' onClick={()=>location.href='#contact'}>Contact Info</button>
        </div>
        {/* <div id="social-container">
           <i  className="fa-brands fa-linkedin icon fa-2xl" onClick={(e)=>{
            e.preventDefault()
            location.href="https://www.linkedin.com/in/anbu-liyon-068352284"
           }}></i>
           <i className="fa-brands fa-github icon fa-2xl" onClick={(e)=>{
            e.preventDefault()
            location.href="https://github.com/anbuleo"
           }}></i>
        </div> */}
    </div>
  </section>
  
  
  </>
}

export default HeroSection