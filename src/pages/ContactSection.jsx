import React from 'react'

function ContactSection() {
  return <>
  <section id="contact">
    <p className="section_text_p1 text-center">Get in touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact_info_uCont flex justify-center">
        <div className="contact_info_cont ">
        <p><i className="fa-solid fa-envelope fa-xl"></i></p>
        <p><a href="mailto:anbuliyon@gmail.com">anbuliyon@gmail.com</a></p>
        </div>
        <div className="contact_info_cont">
        <i class="fa-brands fa-linkedin fa-xl"></i>
        <p><a href="https://www.linkedin.com/in/anbu-liyon-068352284/">LinkedIn</a></p>
        </div>
    </div>
    
  </section>
  </>
}

export default ContactSection